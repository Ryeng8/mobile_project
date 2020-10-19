import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { color } from 'react-native-reanimated'

export default class LoginScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }

    }
   
    render() {
        return (
                <View style = {{ 
                    width:'100%', 
                    height:'100%', 
                    justifyContent: 'center',
                    alignSelf: 'center', 
                    alignContent: 'center', 
                    alignItems: 'center' }}>
                        <Text style={styles.TextLogin}>DEW WATER</Text>
                    <TextInput placeholder={'Enter the user Name'}
                    onChangeText={(value) => this.setState({username : value})}
                    style={{ height:42, width:'80%', 
                    borderBottomWidth:1 }}/>
                    <TextInput placeholder={'Enter the user password'}
                    onChangeText={(value) => this.setState({password : value})}
                    style={{ height:42, width:'80%', 
                    borderBottomWidth:1, marginTop: '5%'}}/>
                    <View style={{
                        marginTop:'10%', 
                        width:'80%'}}>
                        <TouchableOpacity style={{borderWidth:1, 
                        height:42, 
                        width:'80%',
                        justifyContent:'center', 
                        alignItems: 'center', 
                        borderRadius:40,
                        backgroundColor: '#307ecc', 
                        alignSelf:'center', 
                        textAlign:'center'}}>
                        <Text style={{color: 'white'}}>Login</Text>
                        </TouchableOpacity>
                        <View style={styles.Signup}>
                            <Text style={[styles.textSignup, {color: 'gray'}]}>Don't have an account?</Text>
                            <TouchableOpacity
                            onPress = {() => this.props.navigation.navigator('RegisterScreen')}>
                                <Text style={[styles.textSignup, {color:'#3465d9', marginLeft: 4}]}>Signup</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                </View>
        )
    }
}
const styles =StyleSheet.create({
    TextLogin: {
        fontSize: 35,
        marginBottom: 60,
        opacity: 0.9,
        color:'#5f9ea0'

    },
    Signup: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textSignup: {
        textAlign: 'center'
    }
})

