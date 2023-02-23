import React from 'react'
import { Image,View,Text, StyleSheet } from 'react-native';

const InfoTemplate = ({route})=>{
  
    return (
        <View
        style={styles.container}>
          
          <Image
          source={
            route.params.ImgUrl
          }
          style={styles.image}
        />


        <Text style={styles.Name}>{route.params.name}</Text>
        <Text style={styles.Bio}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
        </View>
      );
}

const styles = StyleSheet.create({
  container:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    margin:10,
  },
  image:{
    width: 300, 
    height: 300
  },
  Name:{
    fontSize:35,
    fontWeight:'bold',
    textTransform:'uppercase',
    textAlign:'center',
    color:'#13005A'
  },
  Bio:{
    fontSize:15,
    padding:15,
    marginTop:10
  }
});
export default InfoTemplate ;