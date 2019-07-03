const Color = require('../utils/colors');
const Strings = require('../utils/strings');

import React, {Component} from 'react';
import {StyleSheet, Image, View, StatusBar, Dimensions } from 'react-native';
export default class Intro extends Component{

    static navigationOptions = {
        header:null
    };

    render() {
        return (
          <View style={styles.container}>
           <StatusBar backgroundColor={Color.primaryDark} />
           <Image style={styles.image_fundo} source={require('../images/welcome.jpg')} resizeMode={'cover'}/>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    image_fundo:{
        width:Dimensions.get('screen').width,
        height:Dimensions.get('screen').height
    }
  });
  