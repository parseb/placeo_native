import React from 'react';
import { StyleSheet, AsyncStorage } from 'react-native';
import {Container,  View, Row, Col, Header, Content, Form, Item, Input, Label, Button} from 'native-base';
import { Avatar, Text, Divider } from 'react-native-elements';

export class Home extends React.Component {
  constructor(props){
    super(props);
    //let user
    this.state={
    joins: false,
    creates: false,
  }
  }


  render(){
    //let userdata= JSON.parse(AsyncStorage.getItem('user'));
    //if (this.props.user) { return ( <View> <Text> {this.props.user} zzz </Text> </View>)}

    return (
      <Container style={{flex:1}}>
        <Container style={styles.containertop}>
        <Row>
          <Col>
            <Row>
              <Avatar
              size="xlarge"
              rounded
              containerStyle={{marginTop: 30, flex:1}}
              source={{uri: `${this.props.user.avatar}` }}
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
              />
            </Row>
            <Row style={{marginTop: 15, justifyContent: 'center'}}>
              <Text h4> {this.props.user.name} </Text>
            </Row>
            <Divider />
            <Row>
              <Text> {this.props.user.bio} </Text>
            </Row>
          </Col>
        </Row>
        </Container>
        <Container style={styles.containerbody}>

        </Container>
      </Container>
    );
    }
}

const styles= StyleSheet.create({
  containertop: {
    flex: 1,
    backgroundColor: '#5d93ea',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  containerbody: {
    flex:3,
    backgroundColor: '#60f2ae'
  },
  container3: {
    flex:3,
    backgroundColor: '#60d2ae'
  },
  contenta: {

  }
})
