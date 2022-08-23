import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";

function MemberResult({route, navigation}){
    const {user} = route.params;

function MemberWelcome(){
    navigation.navigate('WelcomeScreen')
}    

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.message}>Kayıt Tamamlandı !</Text>  
            <Text style={styles.label}>Üye Adı: {user.username}</Text>
            <Text style={styles.label}>Üye Soyadı: {user.usersurname}</Text>
            <Text style={styles.label}>Üye Yaş: {user.userage}</Text>
            <Text style={styles.label}>Üye E-posta: {user.useremail}</Text>
            <Text style={styles.label}>Üye Memleket: {user.userhometown}</Text>
            <View style={styles.buton}>
                <Button text="Giriş Ekranına Geri Dön" onPress={MemberWelcome} />
            </View>    
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#708090',
        flex: 1,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 30,
        margin: 5,
        marginTop: 30,
    },
    message : {
        fontWeight: 'bold',
        fontSize: 50,
        textAlign: 'center',
        marginTop: 20,
        color: 'red',
    },
    buton:{
        marginTop: 50,
    }
});

export default MemberResult;