import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const card1 = () => {
  return (
    <View style={styles.container}>
      {/* Wrapper div-like container */}
      <Text style={styles.title}>Well Come to Library 1</Text>  {/* Title at the top */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=600' }}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10, // Adding some padding for spacing
  },
  imageContainer: {
    position: 'relative', // For positioning the title over the image
    width: 720,  // Giving a fixed width to the card
    height: 550, // Giving a fixed height to the card
    borderRadius: 15, // Rounded corners for a modern look
    overflow: 'hidden', // To make sure the image and title stay within rounded corners
    shadowColor: '#000', // Adding a shadow effect for card depth
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, // For Android shadow support
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Ensures the image fills the container proportionally
    // Removed opacity to keep the image sharp and clear
  },
  title: {
    position: 'absolute', // Positioning the title at the top of the image
    top: 10,
    left: 10,
    fontSize: 28, // Slightly larger title
    fontWeight: 'bold',
    color: 'black',
    textShadowColor: 'rgba(0, 0, 0, 0.6)', // Adding a text shadow for better readability
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});

export default card1;