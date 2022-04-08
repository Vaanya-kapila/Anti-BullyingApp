import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ImageBackground,
  Platform,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import firebase from 'firebase';
import { RFValue } from 'react-native-responsive-fontsize';

export default class Heplers extends Component {
  async details() {
    if (
      this.state.problem &&
      this.state.byWhom &&
      this.state.help &&
      this.state.scene
    ) {
      let details = {
        problem:this.state.problem,
      byWhom:this.state.byWhom ,
      help: this.state.help ,
      scene: this.state.scen,
      };

      await firebase
        .database()
        .ref('/details/')
        .set(details)
        .then(function (snapshot) {})
    }  else {
      Alert.alert(
      'Error', 
      'Please fill all fields', 
      [
        {text: 'Ok', onPress:()=> console.log('ok pressed') }
      ], 
      {cancelable: false}
      )
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/bgApp.jpg')}
          style={styles.backgroundImage}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appTitleTextContainer}>
              <Image
                style={styles.appTitleTextImage}
                source={require('../assets/title.jpg')}></Image>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.titleContainer}>
              <Text style={styles.routeText1}>TELL US WHAT HAPPENED</Text>
            </View>
            <TextInput
              style={styles.routeText}
              onChangeText={(problem) => this.setState({ problem })}
              placeholder={'Where were you bullied?'}
              placeholderTextColor="black"
            />
            <TextInput
              style={styles.routeText}
              onChangeText={(byWhom) => this.setState({ byWhom })}
              placeholder={'Who were you bullied by?'}
              placeholderTextColor="black"
            />
            <TextInput
              style={styles.routeText}
              onChangeText={(help) => this.setState({ help })}
              placeholder={`Did you try getting help?`}
              placeholderTextColor="black"
            />
            <TextInput
              style={styles.routeText}
              onChangeText={(scene) => this.setState({ scene })}
              placeholder={'Describe the whole scene.'}
              multiline={true}
              numberOfLines={8}
              placeholderTextColor="black"
            />
            <TouchableOpacity
            
          style={styles.routeCard}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.submitButton}> SUBMIT</Text>
          
        </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  upperContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    position: 'absolute',
    marginLeft: 400,
    height: 100,
    width: 200,
    resizeMode: 'contain',
    right: 40,
    top: -20,
  },
  image1: {
    height: 20,
    width: 0,
    marginLeft: 10,
    marginBottom: 1,
  },
  iconImage3: {
    position: 'absolute',
    marginLeft: 400,
    height: 100,
    width: 200,
    resizeMode: 'contain',
    right: 40,
    top: -10,
  },
  appTitleTextContainer: {
    flex: 0.9,
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 0.5,
    justifyContent: 'center',
    height: 500,
  },
  appTitleTextImage: {
    height: 50,
    width: 300,
    marginLeft:RFValue(20),
    marginBottom: 10,
    justifyContent:'center'
  },
  bottomImage: {
    height: 100,
    width: 350,
    marginBottom: 10,
  },
  image: {
    height: 70,
    width: 70,
    marginLeft: 10,
    marginBottom: 1,
  },
  routeCard: {
    flex: 0.25,
    marginLeft: 40,
    marginRight: 50,
    marginTop: 10,
    borderRadius: 30,
  },
  routeText: {
    fontSize: 20,
    color: 'black',
    marginTop: 40,
   textAlign: "center",
    fontWeight:550
  },
  routeText1: {
    fontSize: 20,
    color: 'black',
    marginTop: 40,
    textAlign: "center",
    fontWeight:700
  },
  knowMore: {
    paddingLeft: 30,
    color: 'red',
    fontSize: 15,
  },
  bgDigit: {
    position: 'absolute',
    color: 'rgba(183, 183, 183, 0.5)',
    fontSize: 120,
    right: 20,
    bottom: -15,
    zIndex: -1,
  },
  submitButton: {
    fontSize:30,
    alignItems: 'center',
    textAlign:'center',
    marginBottom:40,
    backgroundColor:'#f9decd',
    borderRadius: 30,
     flex: 0.5,
    marginLeft: 40,
    marginRight: 50,
    marginTop: 10,
    fontWeight:650
  },
});
