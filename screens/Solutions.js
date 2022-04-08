import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image ,ImageBackground,Platform,StatusBar,TouchableOpacity} from 'react-native';
import firebase from 'firebase';
import { RFValue } from 'react-native-responsive-fontsize';

export default class Solutions extends Component {
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
        <TouchableOpacity
          style={styles.routeCard}
          onPress={() => this.props.navigation.navigate('Solution1')}>
          <Text style={styles.routeText}> Solution</Text>
          <Text style={styles.knowMore}>{'Know More --->'}</Text>
          <Text style={styles.bgDigit}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.routeCard1}
          onPress={() => this.props.navigation.navigate('Solution2')}>
          <Text style={styles.routeText}>Solution</Text>
          <Text style={styles.knowMore}>{'Know More --->'}</Text>
          <Text style={styles.bgDigit}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.routeCard}
          onPress={() => this.props.navigation.navigate('Solution3')}>
          <Text style={styles.routeText}> Solution</Text>
          <Text style={styles.knowMore}>{'Know More --->'}</Text>
          <Text style={styles.bgDigit}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.routeCard1}
          onPress={() => this.props.navigation.navigate('Solution4')}>
          <Text style={styles.routeText}>Solution</Text>
          <Text style={styles.knowMore}>{'Know More --->'}</Text>
          <Text style={styles.bgDigit}>4</Text>
        </TouchableOpacity>
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
        //fontWeight: "bold",
        color: "black",
        marginTop: 20,
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
