import { Text, TouchableOpacity, View } from "react-native";

//TODO: branch name suggestion: challenge-hari-ketiga
// TODO: buat agar text more-nya sejajar dengan caption, sebelum di klik more itu caption yang tampil maksimal 2 baris
// TODO: dan setelah di klik more nya, semua caption tampil
const FeedCaption = (props) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Text style={{ fontWeight: "bold" }}>
        {props.item.username}{" "}
        <Text numberOfLines={2} style={{ fontWeight: "300" }}>
          {props.item.feed.caption}
        </Text>
        <TouchableOpacity
          style={{ 
            alignItems: "center", 
            // backgroundColor: "pink" 
          }}
        >
          <Text style={{ textAlign: "center" }}>more</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default FeedCaption;
