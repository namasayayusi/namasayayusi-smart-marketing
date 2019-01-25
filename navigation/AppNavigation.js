import React from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
// import Home from '../components/Home';
import HomeNavigation from './HomeNavigation';
import Registerdua from '../components/Registerdua';
// import TokohNavigation from './TokohNavigation';

import {createStackNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation';

export default class AppNavigation extends React.Component {
  render() {
    return (
      <AppContainer/>
    )
  }
}


const AppStackNavigator = createStackNavigator({
  Login: {
    screen: Login,
  },
  Registerdua:{
    screen: Login,
  },
  Register:{
    screen: Register,
  },
  HomeStack:{
    screen: HomeNavigation
  },
  // TokohStack:{
  //   screen: TokohNavigation,
  // },
  },{
    initialRouteName : 'Login',
  headerMode: 'none',
})

// const AppDrawerNavigator = createDrawerNavigator({
//   Home: Home,
// },{
//   defaultNavigationOptions: {
//     headerStyle:{
//       backgroundColor:'orange'
//     }
//   }
// })

const AppContainer = createAppContainer(AppStackNavigator);
