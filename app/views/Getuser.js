import React from 'react';
import { StyleSheet, ActivityIndicator, View, TouchableNativeFeedback } from 'react-native';
import {Container,  Row, Header, Content, Form, Item, Input, Label, Button, Text} from 'native-base';

export class Getuser extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isLoading: false,
      gotUser: null,
      user: null,
      auth: null,
      gets: () => {
        fetch(`http://192.168.1.6:3000/api/getuser?auth=${this.state.auth}`)
             .then((response) => response.json())
             .then( (responseJson) => {
               //console.log(responseJson);
               this.setState({
                 isLoading: false,
                 gotUser: responseJson,
                 user: responseJson.token
               })
             }).catch((error) => {
               console.log(error);
           })
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
        <View>
          <Text> Has got user {this.state.user} </Text>
        </View>
      );

    }
    else {
    return (
      <Container style={styles.container}>

       <Content style={styles.contents} >
         <Form style= {styles.form}>
           <Item floatingLabel first >
             <Label>Insert Authentication Code</Label>
             <Input secureTextEntry
              onChangeText={(text) => this.setState({auth: text})} />
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
  },
  contents:{
    marginTop:10
  },
  form: {
    bottom: 10
  },
  button:{
    marginTop: 5,

  }

})
