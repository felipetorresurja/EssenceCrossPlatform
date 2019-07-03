const Color = require('../utils/colors');
const Strings = require('../utils/strings');

import React, {Component} from 'react';
import {View} from 'react-native';


export default class Login extends Component{

    static navigationOptions = {
        title:Strings.titleLogin,
        headerTintColor:Color.white,
        headerStyle:{
          backgroundColor:Color.primary
        }
    };

    render() {
        return (
          <View>
           
          </View>
        );
    }

}