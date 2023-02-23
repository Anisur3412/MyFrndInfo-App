import React, { useState } from 'react'
import { View,Text,StyleSheet, Button, Pressable,ToastAndroid} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const InfoContainer = ({navigation}) => {

const Info={
    Me:{
        Name:"Anisur Rahman",
        ImgURL: require('../media/Anis.jpg')
    },
    Ray:{
        Name:"Rayhan",
        ImgURL: require('../media/rayhan.jpg')
    },
    Sou:{
        Name:"Ahmed Sourov",
        ImgURL: require('../media/sowrob.jpg')
    },
    Rak:{
        Name:"Rakib Ahmed",
        ImgURL: require('../media/rakib.jpg')
    },
    Fay:{
        Name:"Faysal Hossain",
        ImgURL: require('../media/faysal.jpg')
    },
    Jes:{
        Name:"Jesmin Apa",
        ImgURL: require('../media/jesmin.jpg')
    },
    Jer:{
        Name:"Jerin Apa",
        ImgURL: require('../media/jerin.jpg')
    },
}




const OnPress1 =()=> navigation.navigate('infoTemplate',{name:Info.Me.Name , ImgUrl:Info.Me.ImgURL})
const OnPress2 =()=> navigation.navigate('infoTemplate',{name:Info.Ray.Name , ImgUrl:Info.Ray.ImgURL})
const OnPress3 =()=> navigation.navigate('infoTemplate',{name:Info.Sou.Name , ImgUrl:Info.Sou.ImgURL})
const OnPress4 =()=> navigation.navigate('infoTemplate',{name:Info.Rak.Name , ImgUrl:Info.Rak.ImgURL})
const OnPress5 =()=> navigation.navigate('infoTemplate',{name:Info.Fay.Name , ImgUrl:Info.Fay.ImgURL})
const OnPress6 =()=> navigation.navigate('infoTemplate',{name:Info.Jes.Name , ImgUrl:Info.Jes.ImgURL})
const OnPress7 =()=> navigation.navigate('infoTemplate',{name:Info.Jer.Name , ImgUrl:Info.Jer.ImgURL})

        
 
    
  return (
    <View style={styles.container}>
        <Text style={styles.Title}>Me and My All Friends</Text>
        <View style={styles.BtnContainer}>

        <Pressable style={styles.Btn} onPress={OnPress1}>
            <Text style={styles.BtnText}>Me</Text>
        </Pressable>

        <Pressable style={styles.Btn}onPress={OnPress2}>
            <Text style={styles.BtnText}>Rayhan</Text>
        </Pressable>

        <Pressable style={styles.Btn} onPress={OnPress3}>
            <Text style={styles.BtnText}>Sourov</Text>
        </Pressable>

        <Pressable style={styles.Btn} onPress={OnPress4}>
            <Text style={styles.BtnText}>Rakib</Text>
        </Pressable>

        <Pressable style={styles.Btn} onPress={OnPress5}>
            <Text style={styles.BtnText}>Faysal</Text>
        </Pressable>

        <Pressable style={styles.Btn} onPress={OnPress6}>
            <Text style={styles.BtnText}>Jesmin</Text>
        </Pressable>

        <Pressable style={styles.Btn} onPress={OnPress7}>
            <Text style={styles.BtnText}>Jerin</Text>
        </Pressable>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        padding:20,
        display:'flex',
        justifyContent:'center',
        // alignItems:'center'
    },
    Title:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        color:"#13005A",
        textTransform:'uppercase'
    },
    BtnContainer:{
        display:'flex',
    },
    Btn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        backgroundColor: 'black',
        margin:10
      },
    BtnText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
});

export default InfoContainer