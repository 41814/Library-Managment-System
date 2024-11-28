import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import Footer from './Footor';
import Nav from './Nav';
const Module = () => {
        
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Nav/>
            <View style={styles.heroSection}>
                <Image
                    source={{
                        uri: 'https://images.pexels.com/photos/2946979/pexels-photo-2946979.jpeg?auto=compress&cs=tinysrgb&w=600',
                    }}
                    style={styles.heroImage}
                />
                <View style={styles.overlay} />
                <View style={styles.heroTextContainer}>
                    <Text style={styles.heroTitle}>Welcome to Noble Library</Text>
                    <Text style={styles.heroSubtitle}>Explore, Read, and Borrow Your Favorite Books!</Text>
                </View>
            </View>


            <Text style={styles.title}>OUR MODULES</Text>
            <Text style={styles.subtitle}>
                These modules help in the smooth functioning of Library Management Software
            </Text>
            <View style={styles.cardContainer}>
                {/* Cataloguing Card */}
                <View style={styles.card}>
                    <Image
                        source={{ uri: 'https://img.icons8.com/ios/50/null/book.png' }}
                        style={styles.icon}
                    />
                    <Text style={styles.cardTitle}>Cataloguing</Text>
                    <Text style={styles.cardText}>
                        It is the process of creating a list of all bibliographic items such as a short description, list of subjects, author name, and the classification.
                    </Text>
                </View>


                <View style={styles.card}>
                    <Image
                        source={{ uri: 'https://img.icons8.com/ios/50/null/report-card.png' }}
                        style={styles.icon}
                    />
                    <Text style={styles.cardTitle}>Membership Module</Text>
                    <Text style={styles.cardText}>
                        This module keeps track of all important information about students who have taken membership of the library.
                    </Text>
                </View>


                <View style={styles.card}>
                    <Image
                        source={{ uri: 'https://img.icons8.com/ios/50/null/report-card.png' }}
                        style={styles.icon}
                    />
                    <Text style={styles.cardTitle}>Report Generator</Text>
                    <Text style={styles.cardText}>
                        It helps in generating various reports like the status of issued books, total members, books returned, etc.
                    </Text>
                </View>


                <View style={styles.card}>
                    <Image
                        source={{ uri: 'https://img.icons8.com/ios/50/null/database.png' }}
                        style={styles.icon}
                    />
                    <Text style={styles.cardTitle}>Database Mangement</Text>
                    <Text style={styles.cardText}>
                        This module helps in maintaining and organizing the database of the library. Keeping record of each and every item in library.
                    </Text>
                </View>

                <View style={styles.card}>
                    <Image
                        source={{ uri: 'https://img.icons8.com/ios/50/null/refresh.png' }}
                        style={styles.icon}
                    />
                    <Text style={styles.cardTitle}>Circulation</Text>
                    <Text style={styles.cardText}>
                        It is a central and highly visible function of library, as it keeps the record of status of books in the library.
                    </Text>
                </View>


                <View style={styles.card}>
                    <Image
                        source={{ uri: 'https://img.icons8.com/ios/50/null/search-database.png' }}
                        style={styles.icon}
                    />
                    <Text style={styles.cardTitle}>OPAC</Text>
                    <Text style={styles.cardText}>
                        Online Public Access Catalog, it is an online datatbase of materials kept in the library. It allows the search for an item of our choice in the library.
                    </Text>
                </View>

                <View style={styles.card}>
                    <Image
                        source={{ uri: 'https://img.icons8.com/ios/50/null/idea.png' }}
                        style={styles.icon}
                    />
                    <Text style={styles.cardTitle}>Acquisition</Text>
                    <Text style={styles.cardText}>
                        It the department in the library which is responsible for the selection and purchase of material or resources in the library.
                    </Text>
                </View>

                <View style={styles.card}>
                    <Image
                        source={{ uri: 'https://img.icons8.com/ios/50/null/book.png' }}
                        style={styles.icon}
                    />
                    <Text style={styles.cardTitle}>Periodicals</Text>
                    <Text style={styles.cardText}>
                        It helps in receiving periodicals issue and subscription detail. It provides periodical accession number generation.
                    </Text>
                </View>

                <View style={styles.card}>
                    <Image
                        source={{ uri: 'https://img.icons8.com/ios/50/null/report-card.png' }}
                        style={styles.icon}
                    />
                    <Text style={styles.cardTitle}>Reports</Text>
                    <Text style={styles.cardText}>
                        It can generate various types of reports like over dues report, dynamic report, resource status report, transaction history etc.
                    </Text>
                </View>

                <View style={styles.card}>
                    <Image
                        source={{ uri: 'https://img.icons8.com/ios/50/null/administrator-male.png' }}
                        style={styles.icon}
                    />
                    <Text style={styles.cardTitle}>System Administrator</Text>
                    <Text style={styles.cardText}>
                        This module helps in removing all the hassles of library management which lead to smooth functioning.
                    </Text>
                </View>

                <View style={styles.card}>
                    <Image
                        source={{ uri: 'https://img.icons8.com/ios/50/null/transaction-list.png' }}
                        style={styles.icon}
                    />
                    <Text style={styles.cardTitle}>Transaction Management</Text>
                    <Text style={styles.cardText}>
                        Transaction is managing of all books, magazines, journals in the library for fast functioning of software.
                    </Text>
                </View>


                <View style={styles.card}>
                    <Image
                        source={{ uri: 'https://img.icons8.com/ios/50/null/books.png' }}
                        style={styles.icon}
                    />
                    <Text style={styles.cardTitle}>Book Acquisition Control</Text>
                    <Text style={styles.cardText}>
                        It is a method of adding books in the stock of library. The department select vendor, negotiate, arrange for standard orders, and resources.
                    </Text>
                </View>

               


            </View>

            <Footer />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    scrollContainer: {
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

    container: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: '#f8f9fa', 
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 14,
        textAlign: 'center',
        color: '#555',
        marginBottom: 20,
    },
    cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    card: {
        height:270,
        width: '30%', 
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 12,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 4,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    icon: {
        width: 55,
        height: 55,
        marginBottom: 10,
        tintColor: '#ff5722', 
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 5,
        color: '#333',
    },
    cardText: {
        fontSize: 12,
        textAlign: 'center',
        color: '#666',
        lineHeight: 16,
    },

});

export default Module;
