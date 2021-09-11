import { StatusBar } from 'expo-status-bar';
import React from 'react';
import ReadStory from './screens/ReadStoryScreen';
import WriteStory from './screens/WriteStoryScreen';
import { StyleSheet, Text, View,Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component{
  render(){
      return <AppContainer/>
  }
}
const TabNavigator = createBottomTabNavigator({
  Write: {screen: WriteStory},
  Read: {screen: ReadStory},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "Write"){
        return(
          <Image
          source={require("./assets/write.png")}
          style={{width:35, height:32}}
        />
        )
        
      }
      else if(routeName === "Read"){
        return(
          <Image
          source={require("./assets/read.png")}
          style={{width:30, height:30}}
        />)
        
      }
    }
  })
}
);
const AppContainer=createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
