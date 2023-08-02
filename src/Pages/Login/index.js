import React, {useState, useEffect, useRef} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native'
import firebase from "../../firebaseConnection";



export default function Login(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const inputEmail = useRef(null);
    const inputSenha = useRef(null);

    const navigation = useNavigation();

    function navegaCadastro(){
        navigation.navigate('Cadastro')
    }

    function handlePressOutside() {
        inputEmail.current?.blur();
        inputSenha.current?.blur();
    }

    async function logar(){
        Keyboard.dismiss();
        if(email !== '' && senha !== ''){
            await firebase.auth().signInWithEmailAndPassword(email, senha)
            .then((value) => {
                Alert.alert('Sucesso!', 'Login realizado com Sucesso!');
                navigation.navigate('Pagina')

            })
            .catch((error) => {
                Alert.alert('ERRO!', 'Ops, deu algo errado');
                return;
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
                    onPress={logar}>
                        <Text style={[styles.botaoText, {color: '#FFF', fontSize: 22,}]}>
                            Logar
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    style={styles.botao2}
                    onPress={navegaCadastro}>
                        <Text style={[styles.botaoText, {color: '#121212', fontSize: 12,}]}>
                            Não possui conta, clique aqui para cadastrar
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
        width: '32%',
        justifyContent: 'center',
        padding: 14,
        borderRadius: 5,
        backgroundColor: 'darkgreen',
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