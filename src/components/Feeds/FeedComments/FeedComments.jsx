import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import AddComment from '../../AddComments';

const FeedComments = ({ comments }) => {
  const renderComment = ({ item }) => (
    <View style={styles.commentContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.profileImage} />
      <View style={styles.commentContent}>
        <Text style={styles.username}>{item.name}</Text>
        <Text style={styles.commentText}>{item.comment}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.barIcon} />
      <Text style={styles.headerText}>Comments</Text>
      <View style={styles.content}>
        <FlatList
          data={comments}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderComment}
          contentContainerStyle={styles.commentsList}
        />
        <AddComment />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 10,
    textAlign: 'center',
  },
  barIcon: {
    width: 40,
    height: 4,  
    backgroundColor: '#ccc', 
    borderRadius: 2, 
    alignSelf: 'center',
    marginVertical: 4,
  },
  content: {
    flex: 1, // Ensures content takes up available space
    justifyContent: 'space-between', // Ensures AddComment stays at the bottom
  },
  commentsList: {
    paddingHorizontal: 10,
    flexGrow: 1, // Ensures FlatList uses available space above AddComment
  },
  commentContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'flex-start',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  commentContent: {
    flex: 1,
    borderRadius: 8,
    padding: 5,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  commentText: {
    fontSize: 14,
    color: '#333',
    marginTop: 2,
  },
});

export default FeedComments;
