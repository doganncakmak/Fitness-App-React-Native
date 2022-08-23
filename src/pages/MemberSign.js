import React, {useState} from "react";
import { SafeAreaView, Text, Alert, StyleSheet } from "react-native";

import Input from "../components/Input";
import Button from "../components/Button";

function MemberSign({navigation}) {
    const [username, setusername] = useState(null);
    const [usersurname, setusersurname] = useState(null);
    const [userage, setuserage] = useState(null);
    const [useremail, setuseremail] = useState(null);
    const [userhometown, setuserhometown] = useState(null);

    function handleSubmit(){
        if (!username || !usersurname || !userage || !useremail || !userhometown) {
            Alert.alert('Doca Fitness Center', 'Bigileri Boş Bırakanı Siker !!!') ;
            return;
        }
        
        const user = {
            username,
            usersurname,
            userage,
            useremail,
            userhometown,
        };

        navigation.navigate('MemberResultScreen', {user});
    }

    return(
        <SafeAreaView style={StyleSheet.container}>
            <Input style={StyleSheet.label} label= "Üye Adı" placeholder="Üyenin ismini giriniz..." onChangeText={setusername}/>
            <Input label= "Üye Soyadı" placeholder="Üyenin soyismini giriniz..." onChangeText={setusersurname}/>
            <Input label= "Üye Yaş" placeholder="Üyenin yaşını giriniz..." onChangeText={setuserage}/>
            <Input label= "Üye E-posta" placeholder="Üyenin E-posta adresini giriniz..." onChangeText={setuseremail}/>
            <Input label= "Üye Memleket" placeholder="Üyenin memleketini giriniz..." onChangeText={setuserhometown}/>

            <Button text="Kaydı Tamamla" onPress={handleSubmit}/>

        </SafeAreaView>
    ); 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        
    },
    
})
export default MemberSign;