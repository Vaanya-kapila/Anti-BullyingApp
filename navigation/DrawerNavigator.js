import React, { Component } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import firebase from "firebase";


const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends Component {
    render() {
    let props = this.props;
    return (
      <Drawer.Navigator
       >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{ unmountOnBlur: true }}
        />
      </Drawer.Navigator>
    );
  }
}
