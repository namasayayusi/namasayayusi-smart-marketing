import React,{Component} from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Button,
    TextInput,
    Picker,
    Item ,
    Alert
} from 'react-native';
import * as axios from 'axios';
import {appConfig} from '../config/app';

export default class Register2 extends Component {

    constructor(props){
        super(props);
        this.state={
            kota:"kota1",
            agent:"agent1",
        }
    };

    state = {
        email : '',
        notelp: '',
        password: ''
    };

    register=()=>{
        if(this.state.email == '' || this.state.email == ''){
            Alert.alert('Error', 'Email, No Telp & Password tidak boleh kosong ');
            return;
        }
        else if(this.state.email.length <7){
            Alert.alert('Error', 'Email minimal 8 huruf');
            return;
        }
        axios.post(appConfig.apiUrl + './register', {
            email : this.state.email,
            notelp: this.state.notelp,
            password : this.state.password
        }).then(response=>{
            Alert.alert('Succes', 'Berhasil register', [
                {text: 'OK', onPress: () => this.props.navigation.navigate('Login')},
            ],
            {cancelable: false})
        }).catch(err=>{
            console.log(err, 'this is error');
            Alert.alert('Error', err.response.data.message);
        })
    }

    updateData = (key,value)=>{
        this.setState({
            [key] : value
        })
    }

    render() {
        return(
            <View>
                <Text style={styles.judul}>Daftar</Text>
                <View style={styles.textField}>
                
                <TextInput style = {styles.input}
            placeholder="Masukan Email"
            placeholderTextColor='#B2BABB'
            returnKeyType='next'
            keyboardType = "email-address"
            autoCorrect={false}
            value={this.state.email}
            onChangeText={(text) => this.updateData('email', text)}
        />
        <TextInput style = {styles.input}
            placeholder="Masukan No Telp"
            placeholderTextColor='#B2BABB'
            returnKeyType='next'
            keyboardType="number-pad"
            autoCorrect={false}
            value={this.state.notelp}
            onChangeText={(text) => this.updateData('notelp', text)}
        />
        <Picker style = {styles.input} selectedValue={this.state.kota}
            onValueChange={ (value)=>this.setState({kota:value})}>
            <Item value={"Kota1"} label={'Kota1'}/>
            <Item value={"Kota2"} label={'Kota2'}/>
            <Item value={"Kota3"} label={'Kota3'}/>
            <Item value={"Kota4"} label={'Kota4'}/>
            <Item value={"Kota5"} label={'Kota5'}/>
            <Item value={"Kota6"} label={'Kota6'}/>
            <Item value={"Kota7"} label={'Kota7'}/>
            <Item value={"Kota8"} label={'Kota8'}/>
            <Item value={"Kota9"} label={'Kota9'}/>
            <Item value={"Kota10"} label={'Kota10'}/>
        </Picker>
        
        <Picker style = {styles.input} selectedValue={this.state.agent}
            onValueChange={ (value)=>this.setState({agent:value})}>
        <Item value={"Agent1"} label={'Agent1'}/>
        <Item value={"Agent2"} label={'Agent2'}/>
        <Item value={"Agent3"} label={'Agent3'}/>
        <Item value={"Agent4"} label={'Agent4'}/>
        <Item value={"Agent5"} label={'Agent5'}/>
        <Item value={"Agent6"} label={'Agent6'}/>
        <Item value={"Agent7"} label={'Agent7'}/>
        <Item value={"Agent8"} label={'Agent8'}/>
        <Item value={"Agent9"} label={'Agent9'}/>
        <Item value={"Agent10"} label={'Agent10'}/>
        </Picker>

                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#43036C',
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
    text: {
        paddingTop: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 10,
    },
    daftar: {
        paddingTop: 10,
        justifyContent: 'center',
        alignSelf: 'center'
    }

})