/* eslint-disable space-infix-ops */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */







/* 
Swipe Animation Like Gmail using React native cli Reanimated, Video Ref: https://www.youtube.com/watch?v=_HxwwJ1rQvA&t=856s
*/









//import liraries
import React, {useState, useEffect} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import { GestureHandlerRootView, PanGestureHandler, TapGestureHandler } from 'react-native-gesture-handler';
import Animated, { useSharedValue, withSpring, useAnimatedGestureHandler, useAnimatedStyle, withDelay, } from 'react-native-reanimated';



// create a component
const App = () => {
 
 
 
  const animation=useSharedValue(0);
const gestureHandler=useAnimatedGestureHandler({
  onStart:(event,ctx)=>{
    ctx.startX=animation.value;
  },
  onActive:(event,ctx)=>{
    animation.value=ctx.startX+event.translationX;
  },
  onEnd:(event,ctx)=>{
    animation.value=withSpring(0);
  },
})

const animatedStyle=useAnimatedStyle(()=>{
  return {
    transform:[{translateX:animation.value}],
  };
});


const animatedIconLeft=useAnimatedStyle(()=>{
  return {
    transform:[{scale:animation.value>60?withSpring(2):withSpring(1)}],
  };
});

const animatedIconRight=useAnimatedStyle(()=>{
  return {
    transform:[{scale:animation.value<-50?withSpring(2):withSpring(1)}],
  };
});

  return (
    <GestureHandlerRootView style={{flex:1}}>
    <View style={styles.container}>
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View 
      style={{
        backgroundColor:'green',
        width:'100%',
        height:100,
        elevation:5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderRadius:10,
      }}
      >
      <Animated.View style={[{width:14, height:14, marginLeft:20},animatedIconLeft]}>
      <Image
            source={require('./images/star.png')}
          //resizeMode="cover"
          style={{width:'100%',height:'100%',}}
            ></Image>
      </Animated.View>





      <Animated.View style={[{width:14, height:14, marginRight:20},animatedIconRight]}>
      <Image
            source={require('./images/star.png')}
          //resizeMode="cover"
          style={{width:'100%',height:'100%',}}
            ></Image>
      </Animated.View>




      <Animated.View style={[{width:'100%',height:'100%',backgroundColor:'#ffffff', position:'absolute', borderRadius:10,flexDirection:'row', alignItems:'center'},animatedStyle]}>
      <View style={{
        width:50,
        height:50,
        backgroundColor:'#8a07e2',
        borderRadius:25,
        marginLeft:20,
        justifyContent:'center',
        alignItems:'center',

      }}>

        <Text style={{color:'#ffffff',fontSize:30, fontWeight: '600'}}>H</Text>
        
      </View>
      <View style={{marginLeft:20}}>
      <Text style={{fontSize:20,fontWeight:'700',color:'#000000'}}>Title</Text>
      <Text>Subject</Text>
      </View>
      </Animated.View>  
      </Animated.View>
      </PanGestureHandler>
    </View>
    </GestureHandlerRootView>
  );
};






// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default App;

/*  */