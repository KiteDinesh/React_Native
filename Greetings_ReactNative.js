import React, {Component} from 'react';
import {Text,View} from 'react-native';

class Greetings extends Component{
    render(){
        let string = `Hello ${this.props.name} to React Native Tutorial`;
        return(
        <Text>{string}</Text>
        )
    }
}

export default class MultipleGreetings extends Component{
    render(){
        return(
            <View
             style = {{alignItems:'center'}}>
                 <Greetings name="Welcome"></Greetings>
             </View>
        )
    }
}