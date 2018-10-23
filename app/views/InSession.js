import React from 'react';
import { StyleSheet, AsyncStorage, Image } from 'react-native';
import {Container,  View, Row, Col, Header, Card, CardItem, Body, Content, Form, Icon, Item, Input, Label, Button} from 'native-base';
import { Avatar, Text, Divider } from 'react-native-elements';

//import { StatusBar } from './StatusBar.js';

export class InSession extends React.Component {
  constructor(props){
    super(props);
    //let user
    this.state={
        present:[],
        inQue:[],
        status:"Status"
    }
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
      <Text> </Text>
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
