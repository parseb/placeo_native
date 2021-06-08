import React from 'react';
import { AsyncStorage } from 'react-native';
//import { StyleSheet, Text, View } from 'react-native';
import { Home } from './app/views/Home.js';
import { Getuser} from './app/views/Getuser.js';
import './app/views/Storage.js';
import AppLoading from 'expo-app-loading';

import Reactotron, { asyncStorage } from 'reactotron-react-native'; //notconneting

export default class App extends React.Component {


constructor() {
  super();
    this.state={
               user: null,
               uauth: '',
               insession: '',
               userdata: '',
               indata: ''}

}


async gets()  {
                 try {
                   let use1= await global.storage.load({key: 'user'});
                   if (use1 !== null) {
                     const use2= use1['responseJson'];
                     //console.log(`${use1["name"]} u1name in app.js`);
                     console.log(`${use2.name} in app.js`);
                     this.setState({user: use2.name, userdata: use2});
                     console.log(use2);

                    let insession= await global.storage.load({key: 'sessiondata'});
                    if (insession !==null) {
                      const insession2= insession['responseJson'];
                      console.log(`${insession2} in appjs`);
                      this.setState({insession: insession2});
                    }
                   }
                 }  catch (error){
                     console.log(error);
                     return null
                   }
               }



async componentWillMount() {
  await Expo.Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),

});
this.gets();
// try {
//   guser = AsyncStorage.getItem('user');
//   let use= JSON.parse(guser);
//   this.setState({user: use.name,
//                  userdata: use})
// } catch (error) {
//   // Error retrieving data
//   console.log(error.message);
// }
//getUser();
this.setState({isReady:true});

}

componentDidMount(){
//gets();

}

  render() {

    if (!this.state.isReady) {
          return <AppLoading />;
        }
    else
        return (
      //this.state.use
          this.state.user ?   <Home user= {this.state.userdata} sess={this.state.insession} /> : <Getuser />
        )
  }
}
