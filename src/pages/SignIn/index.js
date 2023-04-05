import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity,} from 'react-native';

import * as Animatable from 'react-native-animatable' 
import { useNavigation } from '@react-navigation/native';
import {signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../../firebaseConnection';

export default function SignIn() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation();

  async function login(){
    await signInWithEmailAndPassword(auth, email, password)
    .then(value => {
      navigation.navigate('Home');
    })
    .catch(error => alert("Email ou Senha Inválida!"));
  };
  
 return (
    <View style={styles.container}>

      <View style={styles.containerHeader}>
        <Animatable.Text animation='fadeInLeft' delay={500} style={styles.message}>Bem-vindo(a)</Animatable.Text>
        <Animatable.Image
          source={require('../../assets/vetorSingIn.png')}
          style={{width:'100%', height:'100%'}}
          resizeMod='contain'
          animation='fadeInUp'
      />
      </View>

      <Animatable.View animation='fadeInUp' style={styles.containerForm}>

        <Text style={styles.title}>Email</Text>
        <TextInput
          value={email}
          onChangeText={value => setEmail(value)}
          placeholder='Digite seu email...'
          style={styles.input}
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput
          value={password}
          onChangeText={value => setPassword(value)}
          secureTextEntry={true}
          placeholder='Digite sua senha...'
          style={styles.input}
        />

        <TouchableOpacity style={styles.button}  onPress={() => login()}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonRegister,{marginTop:15}]}>
          <Text style={styles.registerText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonRegister,{marginTop:10}]} onPress={ () => navigation.navigate('SignUp')}>
          <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
        </TouchableOpacity>

      </Animatable.View>

    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#3a46e4'
  },
  containerHeader:{
    flex:1,
    marginTop:'5%',
    marginBottom:'15%',
    paddingStart:'5%'
  },
  message:{
    fontSize: 28,
    fontWeight:'bold',
    color: '#fff'
  },
  containerForm:{
    backgroundColor:'#FFF',
    flex:1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd:'5%'
  },
  title:{
    fontSize: 17,
    marginTop: 28,
    fontWeight: 'bold'
  },
  input:{
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16
  },
  button:{
    backgroundColor: '#3a46e4',
    width:'100%',
    borderRadius: 4,
    paddingVertical:8,
    marginTop:14,
    justifyContent: 'center',
    alignItems:'center',
  },
  buttonText:{
    color:'#FFF',
    fontSize:18,
    fontWeight:'bold'
  },
  buttonRegister:{
    marginTop: 14,
    alignSelf: 'center'
  },
  registerText:{
    color:'#a1a1a1'
  }
})