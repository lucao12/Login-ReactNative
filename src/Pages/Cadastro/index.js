import React, {useState, useEffect, useRef} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import firebase from "../../firebaseConnection";
import { useNavigation } from '@react-navigation/native'



export default function Login(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const inputEmail = useRef(null);
    const inputSenha = useRef(null);

    const navigation = useNavigation();


    function handlePressOutside() {
        inputEmail.current?.blur();
        inputSenha.current?.blur();
    }

    async function cadastrar(){
        Keyboard.dismiss();
        if(email !== '' && senha !== ''){
            await firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then((value) => {
                Alert.alert('Sucesso!', 'Cadastro realizado com Sucesso!');
                navigation.popToTop();
            })
            .catch((error) => {
                if(error.code === 'auth/weak-password'){
                    Alert.alert('ERRO!', 'Sua senha deve conter pelo menos 6 caracteres');
                    return;
                  }
                  else if(error.code === 'auth/invalid-email'){
                    Alert.alert('ERRO!', 'Email inválido');
                    return;
                  }
                  else if (error.code === 'auth/email-already-in-use') {
                    Alert.alert('ERRO!','E-mail já está cadastrado. Faça login ou use outro e-mail.');
                }
                  else{
                    Alert.alert('ERRO!', 'Ops, algo deu errado');
                    return;
                  }
            })
        }
        else{
            Alert.alert('ERRO!', 'Preencha todos os campos com valores');
            return;
        }
        setEmail('');
        setSenha('');
    }
     
    return(
        <TouchableWithoutFeedback onPress={handlePressOutside}>

            <View
            style={styles.container}>

                <View style={styles.areaInput}>

                    <Text style={styles.texto}>Email: </Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Insira o seu email: "
                    placeholderTextColor='#121212'
                    underlineColorAndroid='transparent'
                    onChangeText={(texto) => setEmail(texto)}
                    value={email}
                    ref={inputEmail}
                    />

                </View>

                <View style={styles.areaInput}>

                    <Text style={styles.texto}>Senha: </Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Insira a sua senha: "
                    placeholderTextColor='#121212'
                    underlineColorAndroid='transparent'
                    secureTextEntry={true}
                    onChangeText={(texto) => setSenha(texto)}
                    value={senha}
                    ref={inputSenha}
                    />

                </View>

                <View style={styles.areaBotao}>

                    <TouchableOpacity
                    style={styles.botao}
                    onPress={cadastrar}>
                        <Text style={[styles.botaoText, {color: '#FFF', fontSize: 22,}]}>
                            Cadastrar
                        </Text>
                    </TouchableOpacity>

                </View>

            </View>

        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop: 50,
        backgroundColor: '#FFF',

    },
    texto:{
        color: '#000',
        fontSize: 22
        
    },
    areaInput:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    input:{
        marginBottom: 10,
        padding: 10,
        marginLeft: 7,
        borderWidth: 1,
        borderColor: '#121212',
        height: 45,
        fontSize: 17,
        color: '#121212',
        width: '55%'
    },
    botao:{
        height: 'auto',
        width: '40%',
        justifyContent: 'center',
        padding: 14,
        borderRadius: 5,
        backgroundColor: 'darkblue',
    },
    botaoText:{
        textAlign: 'center'
    },
    areaBotao:{
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop: 5, 
        flexDirection: 'column'
    },
    botao2:{
        height: 'auto',
        width: '100%',
        padding: 14,
    }
});