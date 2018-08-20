import React,{Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    
} from 'react-native';

import Colors from '../utils/Colors'
import Constant from '../utils/Constant'


export default class HeaderComponent extends Component{

    render(){

        return(
            <View style={styles.container}>
                <Text style={styles.headerTxt}
                 >
                 VideoPlayer
                 </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
 
    container:{
        backgroundColor:Colors.appColor,
        height:'10%',
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    headerTxt:{
        color:Colors.white,
        fontSize:18,
        fontFamily: Constant.fontBold
    }
});