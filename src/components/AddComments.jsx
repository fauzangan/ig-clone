import { TextInput, View, StyleSheet, Image } from 'react-native';

const AddComment = () => {
  return (
    <View style={styles.addCommentContainer}>
      <Image source={{ uri: 'https://i1.sndcdn.com/avatars-zAo5N9j7XXVVwKPC-6lrkmw-t1080x1080.jpg' }} style={styles.profileImage} />
      <TextInput
        placeholder="Add a comment..."
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  addCommentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
  },
});

export default AddComment;
