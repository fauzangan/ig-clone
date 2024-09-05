import { Image, Text, TouchableOpacity, View } from "react-native";

import { FontAwesome6 } from "@expo/vector-icons";
import images from "../../../assets/images";

const HeaderLeftSide = () => (
  <Text
    style={{
      fontSize: 30,
      fontFamily: "StyleScript-Regular",
      textAlignVertical: "center",
      paddingTop: 10,
    }}
  >
    Instagram
  </Text>
);

const HeaderRightSide = () => (
  <View style={{ flexDirection: "row", gap: 9 * 2, alignItems: "center" }}>
    <TouchableOpacity activeOpacity={0.2}>
      <FontAwesome6
        //   style={{ marginHorizontal: 9 }}
        name="square-plus"
        size={24}
        color="black"
      />
    </TouchableOpacity>
    {
      // TODO: ada titik di pojok kanan icon heart
    }
    <TouchableOpacity activeOpacity={0.2}>
      <FontAwesome6
        //   style={{ marginHorizontal: 9 }}
        name="heart"
        size={24}
        color="black"
      />
    </TouchableOpacity>
    <TouchableOpacity activeOpacity={0.2}>
      <Image
        source={images.facebookMessenger}
        style={{ width: 24, height: 24, marginLeft: -2.5 }}
      />
    </TouchableOpacity>
  </View>
);

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        backgroundColor: "yellow",
      }}
    >
      <HeaderLeftSide />
      <HeaderRightSide />
    </View>
  );
};

export default Header;
