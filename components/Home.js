import React from 'react';
import {
    Alert,
    StyleSheet,
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    TouchableHighlight,
    AsyncStorage
} from 'react-native';

const users = [
    'Agent1',
    'Agent2',
]

export default class Home extends React.Component {

    static navigationOptions = {
        title: 'Home',
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    };

    state = {
        agentType : 0
    }

    async componentDidMount(){
        try{
            const loginData = await AsyncStorage.getItem('login_info');
            if(loginData){
                console.log('yeyyeyyey');
                let data = JSON.parse(loginData);
                this.setState({
                    agentType : data.agent_id
                })
            }
        }
        catch{
            //error
        }
        
    }
    
    get ambilBackground(){
        if(this.state.agentType == 1){
            return require('../gambar/back.jpg')
        }
        else if(this.state.agentType == 2){
            return require('../gambar/back7.png')
        }
        else if(this.state.agentType == 3){
            return require('../gambar/back1.jpg')
        }
        else if(this.state.agentType == 4){
            return require('../gambar/back3.png')
        }
        else if(this.state.agentType == 5){
            return require('../gambar/back.jpg')
        }
        else if(this.state.agentType == 6){
            return require('../gambar/back7.png')
        }
        else{
            return require('../gambar/back.jpg')
        }
    }

    render(){

        return(
            <ImageBackground 
            style={styles.container}
            source={this.ambilBackground}
            >
                
                <View style={styles.viewdua}>
                    <View style={styles.menusatu}>

                        <TouchableOpacity style={styles.icon}>
                            <Image
                                style={{width: 50, height: 50, alignItems: 'center'}}
                                source={require('../gambar/artikel-ungu.png')}
                            />
                            <Text>ARTIKEL</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.icon}>
                            <Image
                                style={{width: 50, height: 50, alignItems: 'center'}}
                                source={require('../gambar/materi-ungu.png')}
                            />
                            <Text>MATERI WORKSHOP</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.icon}>
                            <Image
                                style={{width: 50, height: 50, alignItems: 'center'}}
                                source={require('../gambar/project-ungu.png')}
                            />
                            <Text>PROJECT</Text>
                        </TouchableOpacity>

                        
                    
                    </View>

                    {/* ------------------------------ menu dua ------------------------------ */}

                    <View style={styles.menudua}>
                        <TouchableOpacity style={styles.icon}>
                            <Image
                                style={{width: 50, height: 50, alignItems: 'center'}}
                                source={require('../gambar/video-ungu.png')}
                            />
                            <Text>VIDEO</Text>
                        </TouchableOpacity>
                    
                    </View>

                    <View>

                    </View>
                    <View>

                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'orange',
        justifyContent: 'center',
        flexDirection: 'column',
    },

    viewdua:{
        flex: 5,
        paddingTop: 200,
        justifyContent: 'flex-end'
    },
    menusatu:{
        // flex: 1,
        backgroundColor: 'white',
        paddingBottom: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    menudua:{
        
        backgroundColor: 'white',
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon:{
        padding: 5,
        alignItems: 'center'
    }
})
