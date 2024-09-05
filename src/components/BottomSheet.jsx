import React, { useRef } from "react";
import {
  View,
  Animated,
  PanResponder,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";

const BottomSheet = ({ isVisible, onClose, children }) => {
  const screenHeight = Dimensions.get("window").height;
  const panY = useRef(new Animated.Value(screenHeight)).current;

  const resetBottomSheet = Animated.timing(panY, {
    toValue: screenHeight,
    duration: 300,
    useNativeDriver: true,
  });

  const openBottomSheet = Animated.timing(panY, {
    toValue: 0,
    duration: 300,
    useNativeDriver: true,
  });

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => 
        gestureState.dy > 0 || panY.__getValue() < screenHeight,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy > 0) {
          panY.setValue(gestureState.dy);
        } else {
          panY.setValue(0);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 50) {
          resetBottomSheet.start(() => onClose());
        } else {
          openBottomSheet.start();
        }
      },
    })
  ).current;

  React.useEffect(() => {
    if (isVisible) {
      openBottomSheet.start();
    } else {
      resetBottomSheet.start();
    }
  }, [isVisible]);

  return (
    <Animated.View
      style={[
        styles.bottomSheetContainer,
        {
          transform: [{ translateY: panY }],
          height: screenHeight,
        },
      ]}
      {...panResponder.panHandlers}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  bottomSheetContainer: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    paddingTop: 10,  // Adding padding to top
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
});

export default BottomSheet;
