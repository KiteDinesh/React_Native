import React, {Component} from "react";
import {Text} from "react-native";

export default class HelloWorld extends Component {
  render(){
    let greetings = "Hello World";
    return(
    <Text>{greetings}</Text>
    )
  }
}
