import React from 'react';

import Home from '../components/Home';

import {createStackNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation';

// export default class HomeNavigation extends React.Component {
//   render() {
//     return (
//       <HomeContainer/>
//     )
//   }
// }


export default AppStackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    hedaerMode: 'none'
  },
  },{
  defaultNavigationOptions: {
      headerStyle:{
          backgroundColor: '#3a2151'
      }
  }
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

// const HomeContainer = createAppContainer(AppStackNavigator);
