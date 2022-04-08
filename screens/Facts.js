import React, { Component } from 'react';
import { StyleSheet, Text, View,ImageBackground,SafeAreaView,Platform,StatusBar,Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class Facts extends Component {
  render() {
    return (
      <View style={styles.container}>
       <ImageBackground source={require('../assets/bgApp.jpg')} style={styles.backgroundImage}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.appTitle}>
          <View style={styles.appTitleTextContainer}>
          <Image style={styles.appTitleTextImage}
              source={require('../assets/title.jpg')}></Image>
          </View>
          </View>
          <View style={styles.fact}>
          <Text style={styles.routeText}>
            1.In the US, 1 in 5 students ages 12-18 has been bullied during the
            school year.
          </Text>
          <Text style={styles.routeText}>
            2.Approximately 160,000 teens have skipped school because of bullying.
          </Text>
          <Text style={styles.routeText}>
            3.The most commonly reported type of bullying is verbal harassment (79%), followed by social harassment (50%), physical bullying (29%), and cyberbullying (25%).
          </Text>
          <Text style={styles.routeText}>
           4.According to the Center for Disease Control, students who are bullied are more likely to experience low self-esteem and isolation, perform poorly in school, have few friends in school, have a negative view of school, experience physical symptoms (such as headaches, stomachaches, or problems sleeping)
          </Text>
        </View>
          </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#C8F1F0'
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
  },
  backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    position: "absolute",
        marginLeft:400,
        height: 100,
        width: 200,
        resizeMode: "contain",
        right: 40,
        top:-20
  },
  iconImage1: {
    position: "absolute",
        marginLeft:400,
        height: 120,
        width: 200,
        resizeMode: "contain",
        right: 40,
        top:-20
  },
  iconImage3: {
    position: "absolute",
        marginLeft:400,
        height: 100,
        width: 200,
        resizeMode: "contain",
        right: 40,
        top:-10
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  appTitleTextImage: {
    height:50,
    width:300,
    marginLeft:10,
    marginBottom:10
     },
  routeCard: {
        flex: 0.10,
        marginLeft: 40,
        marginRight: 50,
        marginTop:30,
        borderRadius: 30,
        backgroundColor: '#f9decd'
    },
    routeCard1: {
        flex: 0.10,
        marginLeft: 40,
        marginRight: 50,
        marginTop:30,
        borderRadius: 30,
        backgroundColor: '#fff9ba'
    },
  routeText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "black",
        marginTop: 40,
        paddingLeft: 30,
    },
    knowMore: {
        paddingLeft: 30,
        color: "red",
        fontSize: 15
    },
    bgDigit: {
        position: "absolute",
        color: "rgba(183, 183, 183, 0.5)",
        fontSize: 70,
        right: 20,
        bottom: -15,
        zIndex: -1
    },
});
