import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Button,
    TextInput,
    TouchableWithoutFeedback,
    Alert,
    AsyncStorage
} from 'react-native';

import * as axios from 'axios';
import {appConfig} from '../config/app';

export default class Login extends React.Component {


    state = {
        email : ''
    }

    // login=()=>{
    //     if(this.state.email == ''){
    //         Alert.alert('Error', 'email atau password tidak boleh kosong');
    //         return;
    //     }
    //     else if(this.state.email.length <7){
    //         Alert.alert('Error', 'Email minimal 8 huruf');
    //         return;
    //     }
  
    // }

    login=()=>{
        axios.post(appConfig.apiUrl + '/user',{
            email: this.state.email,
            password: this.state.password
        }).then(async response=>{
            await AsyncStorage.setItem('login_info',JSON.stringify(response.data[0]))
            this.props.navigation.navigate('Home',{
            email : this.state.email
            })
        }).catch(err=>{
            Alert.alert('Error',err.response.data.message);
        })
        // this.props.navigation.navigate('Home',{
        //     email : this.state.email
        // })
    }

    register=()=>{
        this.props.navigation.navigate('Register')
    }

    updateData = (key,value)=>{
        this.setState({
            [key] : value
        })
    }

  render() {
    return (
            <View style={styles.container}>

            <Text style={styles.judul}>Smart Marketing Syariah</Text>

            <View style={styles.textField}>


                <TextInput style = {styles.input}
                    placeholder="Masukan Email"
                    placeholderTextColor='#B2BABB'
                    returnKeyType='next'
                    keyboardType = "email-address"
                    autoCorrect={false}
                    value={this.state.email}
                    onChangeText={(text) => this.updateData('email',text)}
                />
                <TextInput style = {styles.input}
                    placeholder="Masukan Password"
                    placeholderTextColor='#B2BABB'
                    returnKeyType='next'
                    keyboardType = "email-address"
                    autoCorrect={false}
                    value={this.state.password}
                    onChangeText={(text) => this.updateData('password',text)}
                />
                <Button style={styles.loginbutton}
                    title="Login "
                    color="#43036C"
                    onPress={this.login}
                />

                <TouchableWithoutFeedback onPress={this.register}>
                    <Text style={styles.daftar}>
                        Belum mendaftar? Silahkan Daftar
                    </Text>
                </TouchableWithoutFeedback>
                    
            </View>
            </View>
      
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3a2151',
        padding: 20,
        justifyContent: 'center',
        flexDirection: 'column',
    },
    judul: {
        color: 'white',
        padding: 20,
        fontSize: 30,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    input: {
        borderRadius: 8,
        height: 50,
        // width: '100%',
        backgroundColor: '#F2F3F4',
        marginBottom: 10,
        paddingTop: 10,
        paddingLeft: 10,
        justifyContent: 'center'
    },
    textField: {
        borderRadius: 8,
        justifyContent: 'center',
        width: '100%',
        // marginLeft: 20,
        marginRight: 200,
        padding: 20,
        // paddingBottom: 10,
        alignSelf: "stretch",
        backgroundColor: '#fff'
    },
    daftar: {
        paddingTop: 10,
        justifyContent: 'center',
        alignSelf: 'center'
    }

})
