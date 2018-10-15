import React from 'react';
import { AsyncStorage } from 'react-native';
//import { StyleSheet, Text, View } from 'react-native';
import { Home } from './app/views/Home.js';
import { Getuser} from './app/views/Getuser.js';
import './reactotronConfig'
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


               const gets= async () => {
                 try {
                   let use1= await AsyncStorage.getItem('user');
                 }  catch (error){
                     console.log(error);
                     return null
                   }
                 if (use1 !== null) {
                   const use2= JSON.parse(use1);
                   this.setState({user: use2.name, userdata: use2});
                   console.log(use2);
                 }

               }
}



async componentWillMount() {
  await Expo.Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),

});

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
this.props.gets;
}

componentDidMount(){
  //getUser();

}

  render() {

    if (!this.state.isReady) {
          return <Expo.AppLoading />;
        }
    else
        return (
      //this.state.use
          this.state.user ?   <Home user= {this.state.userdata } /> : <Getuser />
    );
    end
  }
}
