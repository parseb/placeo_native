import React from 'react';
import { StyleSheet, AsyncStorage, Image } from 'react-native';
import {Container,  View, Row, Col, Header, Card, CardItem, Body, Content, Form, Icon, Item, Input, Label, Button} from 'native-base';
import { Avatar, Text, Divider } from 'react-native-elements';

import ActionCable from 'react-native-actioncable'
//import ActionCableProvider from 'react-actioncable-provider';

//import PubNubReact from 'pubnub-react';
const cable = ActionCable.createConsumer('ws://192.168.1.6:3000/cable')  //CHANGE for remote. Set constants separate mode local/remote

//import { StatusBar } from './StatusBar.js';

export class InSession extends React.Component {
  constructor(props){
    super(props);
    //let user
    this.state={
        present:[],
        inQue:[],
        status:"Status",
        dataz:"",
    }


    console.log(this.props.user); //DEV


  }

  componentDidMount(){
    let that= this;
    cable.subscriptions.create('SessionrecChannel', {
        received(data) {
          console.log(data);
          that.setState({dataz: data.sessionrec.data})
          console.log(data.sessionrec.transcript);
        }
    });

  }


render(){


  return(
<Container>
<Container style={styles.navBar}>
  <Col style={this.state.rightContainer}>
    <Text>{ this.props.sesdata.name} </Text>
  </Col>
  <Col style={styles.leftContainer}>
    <Text> {this.state.status} </Text>
  </Col>
  <Col>
    <Icon name='menu' style={styles.rightIcon}/>
  </Col>

</Container>
<Container style={styles.presenceCont}>
    <View style={styles.presence}>
      <Text>{this.state.dataz}</Text>
     </View>
     <View style={styles.times}>
      <Text>5:23</Text>
      <Text>0:24</Text>
     </View>
</Container>
<Container style={styles.actionContainer}>


</Container>
</Container>
  )
  }


}
const styles = StyleSheet.create({
 navBar: {
   height: 60,
   flex:1,
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
   backgroundColor: 'blue',
 },
 leftContainer: {
   flex: 2,
   flexDirection: 'row',
   justifyContent: 'flex-start',
   backgroundColor: 'green'
 },
 rightContainer: {
   flex: 1,
   flexDirection: 'row',
   justifyContent: 'space-around',
   backgroundColor: 'red',
 },
 rightIcon: {
   backgroundColor: 'white',
   justifyContent: 'space-around'
 },
 presenceCont: {
   flex:1,
   flexDirection: 'row',
   backgroundColor: 'yellow'
 },
 presence:{
   flex:6,
   flexDirection: 'row'
 },
 times:{
   flex:2,
   flexDirection: 'row',
   justifyContent: 'space-around'
 },
 actionContainer:{
   flex:6,
   backgroundColor: 'red'
 },
});
