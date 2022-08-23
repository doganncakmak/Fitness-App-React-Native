import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

import Button from "../components/Button";

function Welcome ({navigation}){

    function goToMemberSign(){
        navigation.navigate('MemberSignScreen')
    }
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Doca Fitness Center</Text>
            <Button 
                text="Üye Kaydı Oluştur"
                onPress={goToMemberSign}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: '#708090',
    },
    header: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: "bold",
        margin: 10,
    }

})

export default Welcome;