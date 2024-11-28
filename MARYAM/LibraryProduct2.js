import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import Nav from "./Nav";
import Footer from "./Footor";
const LibraryProduct2 = () => {
  return (
    <ScrollView style={styles.container}>
        <Nav/>
        <View style={styles.heroSection}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/3747472/pexels-photo-3747472.jpeg?auto=compress&cs=tinysrgb&w=600',
          }}
          style={styles.heroImage}
        />
        <View style={styles.overlay} />
        <View style={styles.heroTextContainer}>
          <Text style={styles.heroTitle}>Welcome to Noble Library</Text>
          <Text style={styles.heroSubtitle}>Explore, Read, and Borrow Your Favorite Books!</Text>
        </View>
      </View>
      {/* Header */}
      <Text style={styles.header}>
        BENEFITS OF USING SPEARS RFID SYSTEM SOFTWARE
      </Text>

      {/* Main Content Section */}
      <View style={styles.content}>
        {/* Left Section: Images */}
        <View style={styles.imageSection}>
          <Image
            source={{
              uri: "https://www.elibrarysoftware.com/img/barcode-system-big.jpg", // Replace with your actual image URL
            }}
            style={[styles.image, { height: 250 }]} // Adjust image height
            resizeMode="contain"
          />
          <Image
            source={{
              uri: "https://www.elibrarysoftware.com/img/integrated-library-system.jpg", // Replace with your actual image URL
            }}
            style={[styles.image, { height: 250 }]} // Adjust image height
            resizeMode="contain"
          />
          <Image
            source={{
              uri: "https://www.elibrarysoftware.com/img/rfid-system.jpg", // Replace with your actual image URL
            }}
            style={[styles.image, { height: 250 }]} // Adjust image height
            resizeMode="contain"
          />
        </View>

        {/* Right Section: Text */}
        <View style={styles.textSection}>
          {/* Row 1 */}
          <View style={styles.textBlock}>
            <Text style={styles.title}>Efficient Asset Tracking</Text>
            <Text style={styles.description}>
              Traditional methods of asset tracking, like manual recording or
              barcode scanning, can be slow and prone to errors. Spears RFID
              system software streamlines asset tracking by providing accurate,
              real-time data on asset location and condition. Whether it's
              tracking equipment in healthcare facilities, monitoring machinery
              in manufacturing plants, or managing vehicles in a fleet, RFID
              technology simplifies asset management, reduces search time, and
              minimizes the risk of misplaced or lost assets.
            </Text>
          </View>

          {/* Row 2 */}
          <View style={styles.textBlock}>
            <Text style={styles.title}>Reduced Errors</Text>
            <Text style={styles.description}>
              Manual data entry and inventory management processes are prone to
              human errors, leading to inconsistencies in inventory records and
              operational inefficiencies. Spears RFID system software minimizes
              errors by automating data capture and eliminating the need for
              manual intervention. With RFID tags transmitting data directly to
              the software, businesses can trust the accuracy of their
              inventory records, leading to better decision-making and resource
              allocation.
            </Text>
          </View>

          {/* Row 3 */}
          <View style={styles.textBlock}>
            <Text style={styles.title}>Cost Savings</Text>
            <Text style={styles.description}>
              Spears RFID system software delivers significant cost savings for
              businesses by improving inventory accuracy, streamlining supply
              chain processes, and reducing manual errors. Lower labor costs
              from automated inventory counting, decreased carrying costs due
              to optimized inventory levels, and reduced losses from stock-outs
              or overstocking all contribute to increased profitability.
              Additionally, RFID technology helps prevent theft and shrinkage,
              further cutting financial losses for businesses.
            </Text>
          </View>

          {/* Additional Text Blocks */}
          <View style={styles.textBlock}>
            <Text style={styles.title}>Efficient Asset Tracking</Text>
            <Text style={styles.description}>
              Traditional methods of asset tracking, like manual recording or
              barcode scanning, can be slow and prone to errors. Spears RFID
              system software streamlines asset tracking by providing accurate,
              real-time data on asset location and condition. Whether it's
              tracking equipment in healthcare facilities, monitoring machinery
              in manufacturing plants, or managing vehicles in a fleet, RFID
              technology simplifies asset management, reduces search time, and
              minimizes the risk of misplaced or lost assets.
            </Text>
          </View>
          <View style={styles.textBlock}>
            <Text style={styles.title}>Improved Inventory Management</Text>
            <Text style={styles.description}>
              Spears RFID system software makes it easier for businesses to keep track of their inventory in real-time. By attaching RFID tags to items, organizations can automate inventory counting, cutting down on manual work and human errors. This accuracy ensures that businesses maintain optimal stock levels, avoid running out of stock, and prevent overstocking, which ultimately boosts inventory turnover rates and profitability.
            </Text>
          </View>
        </View>
      </View>
      <Footer/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20, 
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
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  content: {
    flexDirection: "row", // Row layout for images and text
    justifyContent: "space-between",
  },
  imageSection: {
    flex: 1, // This will take 1 part of the space
    marginRight: 16,
  },
  image: {
    height: 400,
    width: 400, // Make the images full width of the container
    marginBottom: 16,
  },
  textSection: {
    flex: 2, // This will take 2 parts of the space
  },
  textBlock: {
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
  },
});

export default LibraryProduct2;
