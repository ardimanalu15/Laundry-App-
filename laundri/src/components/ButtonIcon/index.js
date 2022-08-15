import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import React from 'react';
import { IconAddSaldo, IconGetPoint, IconKiloan, IconKarpet, IconSatuan,IconSetrika, IconVIP, IconEkspress} from '../../assets';
import { WARNA_SEKUNDER } from '../../utils/constan';

const ButtonIcon = ({title, type}) => {
    const Icon = () => {
        if(title === "Add saldo") return <IconAddSaldo/>

        if(title === "Get Point") return <IconGetPoint/>
        
        if(title === "Kiloan") return <IconKiloan/>

        if(title === "Satuan") return <IconSatuan/>

        if(title === "VIP") return <IconVIP/>

        if(title === "Karpet") return <IconKarpet/>

        if(title === "Setrika Saja") return <IconSetrika/>

        if(title === "Eskpress") return <IconEkspress/>

        return <IconAddSaldo />
    }

  return (
    <TouchableOpacity style={styles.container(type)}>
        <View style={styles.button(type)}>
        <Icon />
        </View>
        <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;
//const windowWidth = Dimensions.get('window').width;
//const windowHeight= Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: (type) => ({        
        marginBottom : type === "layanan" ? 12 : 0, 
        marginRight : type === "layanan" ? 15 : 0 ,
        justifyContent: 'flex-end',
    }),
    button: (type) => ({
        backgroundColor: WARNA_SEKUNDER,
        padding: type === "layanan" ? 12 : 7,
        borderRadius: 10
    }),
    text: (type) =>({
        fontSize: type === "layanan" ? 14 : 10 ,
        fontFamily: 'TitilliumWeb-Regular',
        textAlign: 'center',        
    }),

});
