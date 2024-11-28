import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import Nav from "./Nav";
import Footer from "./Footor";
const LibraryProduct3 = () => {
    
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Nav/>
      <View style={styles.heroSection}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/626986/pexels-photo-626986.jpeg?auto=compress&cs=tinysrgb&w=600',
          }}
          style={styles.heroImage}
        />
        <View style={styles.overlay} />
        <View style={styles.heroTextContainer}>
          <Text style={styles.heroTitle}>Welcome to Noble Library</Text>
          <Text style={styles.heroSubtitle}>Explore, Read, and Borrow Your Favorite Books!</Text>
        </View>
      </View>
      <Text style={styles.header}>Thinking SYSTEM SOFTWARE</Text>

      {/* Separate Divs for Text and Image */}
      <View style={styles.row}>
        {/* Text Section */}
        <View style={styles.textContainer}>
          <Text style={styles.description}>
            Spears Radio frequency identification uses electromagnetic fields to
            automatically identify and track tags attached to books. There are
            several ways of identifying tags, but the most common is to store a
            serial number. The chip and antenna attached together are called an
            RFID tag. The RFID reader or scanner converts the RFID tag
            information into digital information which will be further seen in
            the computer and stored for future use.
          </Text>
          <Text style={styles.description}>
            <Text style={styles.highlightedText}>Spears Library Management system</Text>, RFID, acts as a systematic way of data
            collection. This system plays an important role in redefining the
            library process by scanning books on the shelves itself without tipping
            them out.
          </Text>
        </View>

        {/* Image Section */}
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRM4lShuGq_x_T7RydCJH5xrf7BkXxlDFlnw&s", // Replace with your actual image URI
            }}
            style={styles.diagram}
            resizeMode="contain"
          />
        </View>
      </View>

      {/* Benefits Section */}
      <Text style={styles.benefitsHeader}>Benefits of thinking in a box in LMS</Text>
      <View style={styles.benefitsList}>
        {[ 
          "Scanning made easy with tags",
          "Faster check-in and check-out facility",
          "Easy to maintain inventory through wireless system",
          "Increase accuracy and efficiency",
          "RFID Gate acts as an anti-theft",
          "Reduces the time of circulation",
        ].map((benefit, index) => (
          <Text key={index} style={styles.benefitItem}>
            ✅ {benefit}
          </Text>
        ))}
      </View>
      <Footer/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  heroSection: {
    position: 'relative',
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroImage: {
    width: '100%',
    height: 500,
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
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  textContainer: {
    flex: 1, // Equal width for text
    marginRight: 8, // Space between text and image
  },
  imageContainer: {
    flex: 1, // Equal width for image
    justifyContent: "center", // Center image vertically
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
    color: "#333",
    marginBottom: 55,
  },
  highlightedText: {
    color: "#007BFF",
    fontWeight: "bold",

  },
  diagram: {
    width: "100%", // Full width of its container
    height: 300, // Adjust height as needed
  },
  benefitsHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 12,

  },
  benefitsList: {
    marginBottom: 20,

  },
  benefitItem: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
  },
});

export default LibraryProduct3;
