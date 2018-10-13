import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import { Home } from './app/views/Home.js';
import { Getuser} from './app/views/Getuser.js';


export default class App extends React.Component {

constructor() {
  super();
  this.state= {user :false,
               uauth: "false",
               insession: "false",
               userdata: "false",
               indata: "false"}
}

async componentWillMount() {
  await Expo.Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
});
this.setState({isReady:true})
}



  render() {
    if (!this.state.isReady) {
          return <Expo.AppLoading />;
        }
  return (
      this.state.user ?   <Home /> : <Getuser />


    );
  }
}
