import React from 'react';
import { StyleSheet, AsyncStorage, Image } from 'react-native';
import {Container,  View, Row, Col, Header, Card, CardItem, Body, Content, Form, Item, Input, Label, Button} from 'native-base';
import { Avatar, Text, Divider } from 'react-native-elements';
import { InSession } from './InSession.js';


export class Home extends React.Component {
  constructor(props){
    super(props);
    //let user
    this.state={
    auth: this.props.user.auth,
    creates: false,
    sessiondata: '',
    joins: "",
    joinsf: () => {
        this.setState.isLoading= true;
        //fetch(`https://salty-garden-64535.herokuapp.com/api/getuser?joincode=${this.state.joins}?auth=${this.props.user.auth}`) #remote
        fetch(`http://192.168.100.11:3000/api/joins?joincode=${this.state.joins}`)
             .then((response) => response.json())
             .then( (responseJson) => {
                let use= JSON.stringify(responseJson);
                global.storage.save({
                  key: 'sessiondata',
                  data: { responseJson }, //or use. stringified. needs map?
                  expires: 1000 * 3600
              });
              this.setState({
                isLoading: false,
                sessiondata: responseJson,
                               });
               console.log(use);
               console.log(String(responseJson.session) + "THISIS responsJSON");
               console.log(String(this.state.sessiondata) + "THISISSTATE.USER");
             }).catch((error) => {
               console.log(error);
           })

           this.setState.isLoading= false;

      }

  }
  }


  render(){
    //let userdata= JSON.parse(AsyncStorage.getItem('user'));
    //if (this.props.user) { return ( <View> <Text> {this.props.user} zzz </Text> </View>)}
    if (this.state.sessiondata) {
      return(
        <InSession sesdata={this.state.sessiondata} user={this.props.user}/>
      );
    } else if (this.props.sess) {
      return(
        <InSession sesdata={this.props.sess} user={this.props.user}/>
      );
    }
    else {
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
              <Text> "{this.props.user.bio}" </Text>
            </Row>
          </Col>
        </Row>
        </Container>
        <Container style={styles.containerbody}>
        <Content style={styles.contents} >
          <Form style= {styles.form}>
            <Item floatingLabel first title="text">
              <Label>Insert Join Code</Label>
              <Input secureTextEntry onChangeText={(text) => { this.state.joins= text}} />
            </Item>
          </Form>
          <Button rounded block
          style={styles.button}
          onPress={this.state.joinsf} >
             <Text> Join Session </Text>
         </Button>
        </Content>
      <Content>
        <Card>
          <CardItem header style={{justifyContent: 'center'}}>
            <Text style={{fontWeight: 'bold'}}>Created Session</Text>
          </CardItem>
          <Divider />
          <CardItem>
            <Body>
              <Text>
                Scan Code
              </Text>
            </Body>
          </CardItem>
       </Card>
     </Content>
        </Container>
      </Container>
    );
  }
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
