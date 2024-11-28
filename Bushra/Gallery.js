import React from 'react';
// import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import Footer from './Footor';
import Nav from './Nav';
const Gallery = () => {
 
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
     <Nav/>
      <View style={styles.heroSection}>

        <Image
          source={{
            uri: 'https://images.pexels.com/photos/2079451/pexels-photo-2079451.jpeg?auto=compress&cs=tinysrgb&w=600',
          }}
          style={styles.heroImage}
        />
        <View style={styles.overlay} />
        <View style={styles.heroTextContainer}>
          <Text style={styles.heroTitle}>Welcome to Noble Library</Text>
          <Text style={styles.heroSubtitle}>Explore, Read, and Borrow Your Favorite Books!</Text>
        </View>
      </View>



     
  <View style={styles.cardsContainer}>
    <View style={styles.statCard}>
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/4170629/pexels-photo-4170629.jpeg?auto=compress&cs=tinysrgb&w=600',
        }}
        style={styles.heroImage1}
      />
      <Text style={styles.statNumber}>10,000+</Text>
      <Text style={styles.statLabel}>The library has a rich and diverse collection of materials, especially in terms of breadth and depth of coverage</Text>
    </View>
    <View style={styles.statCard}>
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/3563625/pexels-photo-3563625.jpeg?auto=compress&cs=tinysrgb&w=600',
        }}
        style={styles.heroImage1}
      />
      <Text style={styles.statNumber}>2,000+</Text>
      <Text style={styles.statLabel}>LUMS Library offers diverse sitting to its students. Strict protocols are followed to provide a unique and peaceful reading space to its users.</Text>
    </View>
    <View style={styles.statCard}>
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/3599208/pexels-photo-3599208.jpeg?auto=compress&cs=tinysrgb&w=600',
        }}
        style={styles.heroImage1}
      />
      <Text style={styles.statNumber}>5,000+</Text>
      <Text style={styles.statLabel}>The Library is continuously introducing user-focused innovative information access and retrieval systems.</Text>
    </View>
    <View style={styles.statCard}>
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/4273468/pexels-photo-4273468.jpeg?auto=compress&cs=tinysrgb&w=600',
        }}
        style={styles.heroImage1}
      />
      <Text style={styles.statNumber}>5,000+</Text>
      <Text style={styles.statLabel}>National Library offers diverse sitting to its students. Strict protocols are followed to provide a unique and peaceful reading space to its users.</Text>
    </View>
    <View style={styles.statCard}>
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=600',
        }}
        style={styles.heroImage1}
      />
      <Text style={styles.statNumber}>5,000+</Text>
      <Text style={styles.statLabel}>The library has established its reputation in the country by providing excellent services and facilities to fulfill the information needs of its users. It uses state-of-the-art technology and systems.</Text>
    </View>
    <View style={styles.statCard}>
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/2465877/pexels-photo-2465877.jpeg?auto=compress&cs=tinysrgb&w=600',
        }}
        style={styles.heroImage1}
      />
      <Text style={styles.statNumber}>5,000+</Text>
      <Text style={styles.statLabel}>The library has established its reputation in the country by providing excellent services and facilities to fulfill the information needs of its users. It uses state-of-the-art technology and systems.</Text>
    </View>
    <View style={styles.statCard}>
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/267582/pexels-photo-267582.jpeg?auto=compress&cs=tinysrgb&w=600',
        }}
        style={styles.heroImage1}
      />
      <Text style={styles.statNumber}>5,000+</Text>
      <Text style={styles.statLabel}>The Ialamabad Universal library has established its reputation in the country by providing excellent services and facilities to fulfill the information needs of its users. It uses state-of-the-art technology and systems.</Text>
    </View>
    <View style={styles.statCard}>
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/2008136/pexels-photo-2008136.jpeg?auto=compress&cs=tinysrgb&w=600',
        }}
        style={styles.heroImage1}
      />
      <Text style={styles.statNumber}>5,000+</Text>
      <Text style={styles.statLabel}>Three active specialized Help Desks have been set up to provide in-depth reference and research support. All helpdesks provide services till 8:00 pm on all working days. Users may make queries by telephone, fax, and e-mail.</Text>
    </View>
  </View>

  <Footer/>
    </ScrollView>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 20, // To ensure there’s space at the bottom

  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#333',
  },
  navItem: {
    fontSize: 16,
    color: '#fff',
  },
  heroSection: {
    position: 'relative',
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  heroTextContainer: {
    position: 'absolute',
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
  },
  headerText: {
    backgroundColor: 'gray',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
  },
  statsSection: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Enables wrapping to the next row
    justifyContent: 'space-between', // Evenly spaces items
  },
  statCard: {
    width: '45%', // Two cards per row'
    height:500,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    marginVertical: 10,
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
  heroImage1: {
    width: 400,
    height: 300,
    borderRadius: 10,
    marginBottom: 10,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  statLabel: {
    fontSize: 16,
    color: '#555',
  },
});
