import React,{Component} from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Button,
    TextInput,
    Picker,
    Alert
} from 'react-native';
import * as axios from 'axios';
import {appConfig} from '../config/app';

const Item = Picker.Item
export default class Register extends Component {

    constructor(props){
        super(props);
        this.state={
            kota:"",
            agent:"",      
           email : '',
           notelp: '',
           password: '',
           pilihanAgent : [],
           pilihanKota : []
        }
    };

    componentDidMount(){
        axios.get(appConfig.apiUrl + '/agent')
        .then(response=>{
            this.setState({
                pilihanAgent : response.data
            })
        }).catch(err=>{
            console.log(err, 'this is error');
        })
        axios.get(appConfig.apiUrl + '/kota')
        .then(response=>{
            this.setState({
                pilihanKota : response.data
            })
        }).catch(err=>{
            console.log(err, 'this is error');
        })
    }

    register=()=>{
        console.log(this.state);
        if(this.state.email == '' || this.state.email == ''){
            Alert.alert('Error', 'Email, No Telp & Password tidak boleh kosong ');
            return;
        }
        else if(this.state.email.length <7){
            Alert.alert('Error', 'Email minimal 8 huruf');
            return;
        }
        console.log({
            email : this.state.email,
            notelp: this.state.notelp,
            kota_id: this.state.kota,
            agent_id: this.state.agent,
            password : this.state.password
        })
        axios.post(appConfig.apiUrl + '/register', {
            email : this.state.email,
            notelp: this.state.notelp,
            kota_id: this.state.kota,
            agent_id: this.state.agent,
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
    return (
          <View style={styles.container}>

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
            {
                this.state.pilihanKota.map(kota=>{
                    return (
                        <Item key={kota.id} value={kota.id} label={kota.nama}/>            
                    )
                })
            }
        </Picker>
        
        <Picker style = {styles.input} selectedValue={this.state.agent}
            onValueChange={ (value)=>this.setState({agent   :value})}>
        {
                this.state.pilihanAgent.map(agent=>{
                    return (
                        <Item key={agent.id} value={agent.id} label={agent.nama}/>            
                    )
                })
            }
        </Picker>

        <TextInput style = {styles.input}
            placeholder="Masukan Password"
            placeholderTextColor='#B2BABB'
            returnKeyType='next'
            keyboardType = "email-address"
            autoCorrect={false}
            value={this.state.password}
            onChangeText={(text) => this.updateData('password', text)}
            ref={"txtPassword"}
        />
        <Button style={styles.loginbutton}
            title="Sign up "
            color="#3a2151"
            onPress = {this.register}
        />

            
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
