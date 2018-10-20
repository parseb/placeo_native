import React from 'react';
import { StyleSheet, ActivityIndicator, View, AsyncStorage } from 'react-native';
import {Container,  Row, Header, Content, Form, Item, Input, Label, Button, Text} from 'native-base';
import { Home } from './Home.js';
import { App } from '../../App';
import './Storage.js';


export class Getuser extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isLoading: false,
      gotUser: null,
      user: null,
      auth: null,
      gets: () => {
        this.setState.isLoading= true;
        //fetch(`https://salty-garden-64535.herokuapp.com/api/getuser?auth=${this.state.auth}`)  //remote
        fetch(`http://192.168.1.6:3000/api/getuser?auth=${this.state.auth}`)
             .then((response) => response.json())
             .then( (responseJson) => {
                let use= JSON.stringify(responseJson);
                global.storage.save({
                  key: 'user',
                  data: { responseJson }, //or use. stringified. needs map?
                  expires: 1000 * 3600
              });
              this.setState({
                isLoading: false,
                gotUser: responseJson,
                user: responseJson.name

               });
               console.log(String(responseJson) + "THISIS responsJSON");
               console.log(String(this.state.user) + "THISISSTATE.USER");
               console.log(String(use) + "this is STINGIFYIED");
             }).catch((error) => {
               console.log(error);
           })

           this.setState.isLoading= false;

      }
    }
  };

  getsUser= function(){
           //this.setState.isLoading= true;

             }



//let auth= 'text';
componentWillMount(){
  this.setState.isLoading= true;

}

componentDidMount() {
this.setState.isLoading= false;

}



  render(){

    if (this.state.isLoading){
      return(
        <Container style={styles.container}>
          <ActivityIndicator />
        </Container>
      );
      // else if (this.state.gotUser) {
      //   //redirect_to
      //
      // }
      }
    else if (this.state.user) {
      return(
      <Home user={this.state.gotUser} /> /////!!!!!!!
      );

    }
    else {
    return (
      <Container style={styles.container}>

       <Content style={styles.contents} >
         <Form style= {styles.form}>
           <Item floatingLabel firs title="title">
            // <Label>Insert Authentication Code</Label>
             <Input secureTextEntry onChangeText={(text) => { this.state.auth= text}} />
           </Item>
         </Form>
         <Button rounded block
         style={styles.button}
         onPress={this.state.gets} >
            <Text> Get In </Text>
        </Button>
       </Content>
     </Container>

   );
 }}



}



const styles= StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#05fbfc',
    justifyContent:'center',
  }
  // contents:{
  //   marginTop:10
  // },
  // form: {
  //   bottom: 10
  // },
  // button:{
  //   marginTop: 5
  //}



})
