import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const POSTS = [
  {
    id: 1,
    author: 'John Doe',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu aliquet leo. Donec eget erat eget mi blandit sodales quis ut magna. Nam dictum enim a sapien lobortis, vel luctus justo bibendum.',
    image: require('../../assets/post.jpg'),
    likes: 123,
    comments: 10,
  },
  {
    id: 2,
    author: 'Jane Smith',
    text: 'Pellentesque pellentesque augue sit amet enim rhoncus, sit amet sagittis eros tincidunt. Nullam scelerisque ipsum a lacus ornare ullamcorper. In non faucibus nulla, nec efficitur mauris.',
    image: require('../../assets/post.jpg'),
    likes: 456,
    comments: 20,
  },
  {
    id: 3,
    author: 'Bob Johnson',
    text: 'Vivamus sollicitudin tellus a porttitor scelerisque. Sed eu turpis vel sapien interdum congue a vel nulla. Integer ultrices bibendum est, quis rhoncus justo vestibulum at.',
    image: require('../../assets/post.jpg'),
    likes: 789,
    comments: 30
  }
];

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      {POSTS.map(post => (
        <View key={post.id} style={styles.post}>
          <View style={styles.postHeader}>
            <Image source={require('../../assets/profile-pic.jpg')} style={styles.profilePic} />
            <Text style={styles.author}>{post.author}</Text>
          </View>
          <Text style={styles.postText}>{post.text}</Text>
          <Image source={post.image} style={styles.postImage} />
          <View style={styles.postFooter}>
            <TouchableOpacity style={styles.postButton}>
              <Image source={require('../../assets/like.png')} style={styles.postButtonIcon} />
              <Text style={styles.postButtonText}>{post.likes} Likes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.postButton}>
              <Image source={require('../../assets/coment.png')} style={styles.postButtonIcon} />
              <Text style={styles.postButtonText}>{post.comments} Comments</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    padding: 10,
  },
  post: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profilePic: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  author: {
    fontWeight: 'bold',
  },
  postText: {
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
  },
  postFooter:{
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  postButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  postButtonIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  postButtonText: {
    color: '#333',
    fontSize: 16,
  },
});
