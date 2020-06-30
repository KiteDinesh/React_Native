import React, {Component} from "react";
import {View,Text, TextInput} from "react-native";

export default class App extends Component{
  constructor(props){
    super(props);
    this.state={
      input : " "
    };
  }
  render(){
    return(
    <View>
      <TextInput style={{height:40,borderColor:"black",borderWidth:1,margin:20,padding:10}}
      keyboardType="email-address"
      placeholder="Enter Your Email"
      placeholderTextColor="red"
      onChangeText={
        (text)=>{
          this.setState(
            (previous)=>{
              return{
                input : text
              };
            }
          )
        }
      }></TextInput>
      <Text style={{padding:10}}>{this.state.input}</Text>
    </View>
    )
  }
}