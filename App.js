import * as SplashScreen from "expo-splash-screen";
import { config } from "@tamagui/config/v3";
import { useFonts } from "expo-font";
import { FlatList, RefreshControl, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { createTamagui, TamaguiProvider } from "tamagui";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Header from "./src/components/Header";
import Stories from "./src/components/Stories";
import { widths } from "@tamagui/config";
import Feeds from "./src/components/Feeds";
import { PortalProvider } from "@gorhom/portal";

SplashScreen.preventAutoHideAsync();

const tamaguiConfig = createTamagui(config);

const App = () => {
  // @ts-ignore
  const [fontsLoaded, fontsError] = useFonts({
    // @ts-ignore
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    // @ts-ignore
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
    // @ts-ignore
    "StyleScript-Regular": require("./assets/fonts/ttf/StyleScript-Regular.ttf"),
  });

  const [isRefreshing, setIsRefreshing] = useState(false);

  const onLayoutRootView = async () => {
    if (fontsLoaded || fontsError) {
      await SplashScreen.hideAsync();
    }
  };

  if (!fontsLoaded) {
    return null;
  }

  const ContentComponent = () => {
    return (
      <>
        <Header />
        <Stories />
        <View
          style={{
            width: "100%",
            height: 0.8,
            backgroundColor: "lightgray",
            marginVertical: 3,
          }}
        />
        <Feeds />
      </>
    );
  };

  const onRefresh = () => {
    console.log("App: onRefresh");
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 2000);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <TamaguiProvider config={tamaguiConfig}>
          <PortalProvider>
            <StatusBar style="light" backgroundColor="black" />
            <FlatList
              data={[{}]}
              renderItem={ContentComponent}
              contentContainerStyle={{
                justifyContent: "flex-start",
                backgroundColor: "white",
              }}
              onLayout={onLayoutRootView}
              refreshControl={
                <RefreshControl
                  refreshing={isRefreshing}
                  onRefresh={onRefresh}
                />
              }
            />
          </PortalProvider>
        </TamaguiProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
