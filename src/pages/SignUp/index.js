import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import * as Animatable from 'react-native-animatable' 
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../../firebaseConnection';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
//import DatePicker from 'react-native-datepicker';

export default function SignUp() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  async function createUser(){
    await createUserWithEmailAndPassword(auth, email, password)
    .then(value => {
      alert("Cadastro feito com sucesso!")
      navigation.navigate('SignIn');
    })
    .catch(error => {
      if(error.code === 'auth/weak-password'){
        alert("Senha Fraca!\nSua senha deve conter pelo menos 6 caracteres.");
        return;
      }
      if(error.code === 'auth/invalid-email'){
        alert('Email Inválido')
        return;
      }else{
        alert("Ops, algo deu errado!\nTente novamente.")
      }
    })
  }

  return (
    
    <View style={styles.container}>
      <View style={styles.containerHeader}>
      <Animatable.Image
        source={require('../../assets/logo.png')}
        style={{width:'100%', height:'100%'}}
        resizeMod='contain'
        animation='fadeInDown'
      />
      </View>
      <KeyboardAwareScrollView style={styles.containerForm} contentContainerStyle={{alignItems:'center'}}>
        <Text style={styles.title}>Cadastro</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          onChangeText={text => setName(text)}
          value={name}
        />
        <TextInput
          style={styles.input}
          placeholder="Sobrenome"
          onChangeText={text => setLastName(text)}
          value={lastName}
        />
        <TextInput
          style={styles.input}
          placeholder="Data de Nascimento"
          value={dateOfBirth}
          type={'datetime'}
          options={{
            format: 'DD/MM/YYYY'
          }}
          onChangeText={text => {
            setDateOfBirth({
              date: text
            })
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirme o e-mail"
          //onChangeText={text => setEmail(text)}
          //value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          onChangeText={text => setPassword(text)}
          value={password}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirme a senha"
          //onChangeText={text => setPassword(text)}
          //value={password}
        />
        <TouchableOpacity style={styles.button} onPress={() => createUser()}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3a46e4'
  },
  containerHeader:{
    flex:1,
    marginTop:'5%',
    marginBottom:'5%',
    paddingStart:'5%',
  },
  containerForm: {
    backgroundColor: '#FFF',
    height: '50%', // ou uma altura fixa em pixels
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    fontSize: 24,
    margin: 20,
    fontWeight: 'bold',
    
  },
  input: {
    width: '80%',
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#3a46e4',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color:'#FFF',
    fontSize:18,
    fontWeight:'bold'
  },
});
