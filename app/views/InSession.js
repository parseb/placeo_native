import React from 'react';
import { StyleSheet, AsyncStorage, Image } from 'react-native';
import {Container,  View, Row, Col, Header, Card, CardItem, Body, Content, Form, Item, Input, Label, Button} from 'native-base';
import { Avatar, Text, Divider } from 'react-native-elements';

export class InSession extends React.Component {
  constructor(props){
    super(props);
    //let user
    this.state={
        present:[],
        inQue:[],
        sometext:"Some Text in State"
    }
  }

render(){
  return(
    <View>
      <Text> {this.state.sometext} </Text>
      <Text> {this.props.sesdatatest}  </Text>
    </View>

  )
  }




}
