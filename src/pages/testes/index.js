import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useForm, Controller } from 'react-hook-form';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MaskedTextInput } from 'react-native-mask-text';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { auth, db } from '../../firebaseConnection';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const schema = yup.object({
  name: yup.string().required('Informe seu nome'),
  lastName: yup.string().required('Informe seu sobrenome'),
  phone: yup.string().min(11, 'O telefone deve conter 11 números!').required('Informe seu telefone'),
  email: yup.string().email('Email Inválido!').required('Informe seu email'),
  password: yup.string().min(6, 'A senha deve ter pelo menos 6 dígitos!').required('Informe sua senha')
});

export default function SignUp() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const navigation = useNavigation();

  async function handleSignIn(data) {
    await createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(value => {
        // Usuário criado com sucesso
        alert('Cadastro feito com sucesso!');
        navigation.navigate('SignIn');
        const userDb = collection(db, 'Cadastro');
        addDoc(userDb, {
          name: data.name,
          lastName: data.lastName,
          phone: data.phone,
          email: data.email,
          password: data.password
        });
      })
      .catch((error) => {
        // Erro ao criar usuário
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  return (
    <KeyboardAwareScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center' }}>
      <View style={styles.containerHeader}>
        <Icon name="pencil-square-o" size={hp('10%')} color="#ffffff" style={styles.inputIcon} />
      </View>
      <Text style={styles.title}>Crie sua conta</Text>
      <Text style={styles.subtitle}>Crie uma conta para que possa relaxar e descansar sua mente</Text>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={[styles.inputContainer, { borderWidth: errors.name && 1, borderColor: errors.name && '#ff375b' }]}>
            <Icon name="user" size={hp('3%')} color="#ccc" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Nome"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          </View>
        )}
      />
      {errors.name && <Text style={styles.errorMessage}>{errors.name.message}</Text>}
      <Controller
        control={control}
        name="lastName"
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={[styles.inputContainer, { borderWidth: errors.lastName && 1, borderColor: errors.lastName && '#ff375b' }]}>
            <Icon name="user" size={hp('3%')} color="#ccc" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Sobrenome"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          </View>
        )}
      />
      {errors.lastName && <Text style={styles.errorMessage}>{errors.lastName.message}</Text>}
      <Controller
        control={control}
        name="phone"
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={[styles.inputContainer, { borderWidth: errors.phone && 1, borderColor: errors.phone && '#ff375b' }]}>
            <Icon name="phone" size={hp('3%')} color="#ccc" style={styles.inputIcon} />
            <MaskedTextInput
              style={styles.input}
              placeholder="Telefone"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              mask={"([00]) [00000]-[0000]"}
            />
          </View>
        )}
      />
      {errors.phone && <Text style={styles.errorMessage}>{errors.phone.message}</Text>}
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={[styles.inputContainer, { borderWidth: errors.email && 1, borderColor: errors.email && '#ff375b' }]}>
            <Icon name="envelope-o" size={hp('3%')} color="#ccc" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              keyboardType="email-address"
              autoCapitalize="none"
            />
</View>
)}
/>
{errors.email && <Text style={styles.errorMessage}>{errors.email.message}</Text>}
<Controller
control={control}
name="password"
render={({ field: { onChange, onBlur, value } }) => (
<View style={[styles.inputContainer, { borderWidth: errors.password && 1, borderColor: errors.password && '#ff375b' }]}>
<Icon name="lock" size={hp('3%')} color="#ccc" style={styles.inputIcon} />
<TextInput
           style={styles.input}
           placeholder="Senha"
           onChangeText={onChange}
           onBlur={onBlur}
           value={value}
           secureTextEntry={true}
           autoCapitalize="none"
         />
</View>
)}
/>
{errors.password && <Text style={styles.errorMessage}>{errors.password.message}</Text>}
<TouchableOpacity style={styles.button} onPress={handleSubmit(handleSignIn)}>
<Text style={styles.buttonText}>Cadastrar</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.linkContainer} onPress={() => navigation.navigate('SignIn')}>
<Text style={styles.link}>Já tenho uma conta</Text>
</TouchableOpacity>
</KeyboardAwareScrollView>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  containerHeader: {
    width: wp('100%'),
    height: hp('30%'),
    backgroundColor: '#607d8b',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('2%'),
    marginBottom: hp('1%'),
    marginHorizontal: wp('8%'),
    paddingHorizontal: wp('3%'),
    paddingVertical: hp('1.5%'),
    borderRadius: 10,
    backgroundColor: '#fff'
  },
  inputIcon: {
    marginRight: wp('3%')
  },
  input: {
    flex: 1,
    fontSize: hp('2.2%')
  },
  errorMessage: {
    color: '#ff375b',
    fontSize: hp('1.8%'),
    marginHorizontal: wp('8%'),
    marginBottom: hp('1%')
  },
  button: {
    marginTop: hp('3%'),
    marginHorizontal: wp('8%'),
    paddingHorizontal: wp('3%'),
    paddingVertical: hp('1.5%'),
    borderRadius: 10,
    backgroundColor: '#607d8b'
  },
  buttonText: {
    color: '#fff',
    fontSize: hp('2.2%'),
    textAlign: 'center'
  },
  linkContainer: {
    marginTop: hp('3%'),
    alignItems: 'center'
  },
  link: {
    color: '#607d8b',
    fontSize: hp('2.2%')
  }
});
