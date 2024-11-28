import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView,ImageBackground } from 'react-native';
import Footer from './Footor';
import Nav from './Nav';
const Service = () => {
 
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Nav/>

      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&w=600',
          }}
          style={styles.heroImage}
        />
        <View style={styles.overlay} />
        <View style={styles.heroTextContainer}>
          <Text style={styles.heroTitle}>Welcome to Noble Library</Text>
          <Text style={styles.heroSubtitle}>Explore, Read, and Borrow Your Favorite Books!</Text>
        </View>
      </View>


{/* Header Section */}
<Text style={styles.header}>
        WHAT IS ONLINE LIBRARY MANAGEMENT SYSTEM
      

      {/* First Section: Description and Image */}
      <View style={styles.row}>
        <View style={styles.textContainer}>
          <Text style={styles.description}>
            Online Library Management System is an Automated Library System that handles the various functions of the library. It provides a complete solution to the library management software. The online Library Management System is classified into two parts Bar Code System and RFID System.
          </Text>
          <Text style={styles.description}>
            Library plays an important role in all schools and colleges, no educational institution can exist without Library Administration Software. It is an important part of every school and college and it helps the librarian to keep records of available books as well as issued books. Library Management System software helps in different ways by providing students the facility to learn, gather resources, promote group learning, and improve knowledge and skills.
          </Text>
          <Text style={styles.header}>Features of Online Library Management System</Text>
          <Text style={styles.bulletPoint}>- Integration of all records of students</Text>
          <Text style={styles.bulletPoint}>- Manage the records systematically</Text>
          <Text style={styles.bulletPoint}>- It can track any information online</Text>
          <Text style={styles.bulletPoint}>- One can generate the reports</Text>
          <Text style={styles.bulletPoint}>- Manage all information online</Text>
          <Text style={styles.bulletPoint}>- Easy to maintain records</Text>
          <Text style={styles.description}>
            The demand for Library Automation Software in India is increasing day by day with the advancement of the system. As we all are living in the digital age, everyone prefers quick and accurate service. Almost all schools and colleges prefer the Library Management System due to the organized and systematic management of the database. College Library Software helps the students to prepare their projects easily and in less time. It also helps in preparing notes and assignments.
          </Text>
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/415078/pexels-photo-415078.jpeg?auto=compress&cs=tinysrgb&w=600',
            }}
            style={styles.image}
          />
        </View>
      </View>
      </Text>
      {/* Second Section: Advantages and Image */}
      <Text style={styles.header1}>
        Advantages of Online Library Management System
     
      <View style={styles.row}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/1831744/pexels-photo-1831744.jpeg?auto=compress&cs=tinysrgb&w=600',
            }}
            style={styles.image1}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.description1}>
            Advantages of Online Library Management System are:
          </Text>
          <Text style={styles.bulletPoint}>- Integration of all records of students</Text>
          <Text style={styles.bulletPoint}>- Manage the records systematically</Text>
          <Text style={styles.bulletPoint}>- It can track any information online</Text>
          <Text style={styles.bulletPoint}>- One can generate the reports</Text>
          <Text style={styles.bulletPoint}>- Manage all information online</Text>
          <Text style={styles.bulletPoint}>- Easy to maintain records</Text>
          <Text style={styles.description}>
            {/* The demand for Library Automation Software in India is increasing day by day with the advancement of the system. As we all are living in the digital age, everyone prefers quick and accurate service. Almost all schools and colleges prefer the Library Management System due to the organized and systematic management of the database. College Library Software helps the students to prepare their projects easily and in less time. It also helps in preparing notes and assignments. */}
            As discussed, the Online Library Management System is categorized into two parts bar code system and RFID system. In a bar code system, books a unique bar code number is assigned to every book and with the help of a bar code reader, we can check the status of the book like when it is issued and returned. While RFID based library management system is a wireless-based system which helps in easy maintenance of records, which reduces the burden of a librarian and lead to fast-tracking of record.

Library Management System stores every information electronically and in an organized and systematic way which leads to effective results. It enhances the overall performance of the students and develops the habit of silent reading. The software is designed in such a way that it modernize the library system and help the students to make the best use of the Library Automation System.
          </Text>
        </View>
      </View>
      </Text>

{/* Header Section */}
<Text style={styles.header}>
        WHAT IS ONLINE LIBRARY MANAGEMENT SYSTEM
      

      {/* First Section: Description and Image */}
      <View style={styles.row}>
        <View style={styles.textContainer}>
          <Text style={styles.description}>
            Online Library Management System is an Automated Library System that handles the various functions of the library. It provides a complete solution to the library management software. The online Library Management System is classified into two parts Bar Code System and RFID System.
          </Text>
          <Text style={styles.description}>
            Library plays an important role in all schools and colleges, no educational institution can exist without Library Administration Software. It is an important part of every school and college and it helps the librarian to keep records of available books as well as issued books. Library Management System software helps in different ways by providing students the facility to learn, gather resources, promote group learning, and improve knowledge and skills.
          </Text>
          <Text style={styles.header}>Features of Online Library Management System</Text>
          <Text style={styles.bulletPoint}>- Integration of all records of students</Text>
          <Text style={styles.bulletPoint}>- Manage the records systematically</Text>
          <Text style={styles.bulletPoint}>- It can track any information online</Text>
          <Text style={styles.bulletPoint}>- One can generate the reports</Text>
          <Text style={styles.bulletPoint}>- Manage all information online</Text>
          <Text style={styles.bulletPoint}>- Easy to maintain records</Text>
          <Text style={styles.description}>
            The demand for Library Automation Software in India is increasing day by day with the advancement of the system. As we all are living in the digital age, everyone prefers quick and accurate service. Almost all schools and colleges prefer the Library Management System due to the organized and systematic management of the database. College Library Software helps the students to prepare their projects easily and in less time. It also helps in preparing notes and assignments.
          </Text>
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/309724/pexels-photo-309724.jpeg?auto=compress&cs=tinysrgb&w=600',
            }}
            style={styles.image}
          />
        </View>
      </View>
      </Text>
       <Footer/>
     </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
  scrollContainer: {
    paddingBottom: 20, // To ensure there’s space at the bottom
    
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
    backgroundColor: '#D3D3D3',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  textContainer: {
    flex: 2,
    marginRight: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    paddingLeft: 50,
  },
  description1: {
    fontSize: 16,
    lineHeight: 24,
    paddingLeft: 50,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft:60,
    paddingTop:50,
  },
  image: {
    width: 320,
    height: 320,
    borderRadius: 200,
    borderWidth: 5,
  },
  image1: {
    width: 320,
    height: 320,
    borderRadius: 30,
    borderWidth: 5,
    paddingRight:60,
  },
  bulletPoint: {
    paddingLeft:80,
    fontSize: 16,
    lineHeight: 24,
  },
  header1: {
    textAlign: 'center',
    backgroundColor: '	#FFFFF0',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Service;
