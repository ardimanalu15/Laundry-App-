import { StyleSheet, Image, View, ImageBackground, Dimensions, Text, ScrollView } from 'react-native';
import React from 'react';
import { ImageHeader,Logo } from '../../assets';
import { PesananAktif, Saldo, ButtonIcon } from '../../components';
import { WARNA_ABU_ABU } from '../../utils/constan';

const Home = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground source={ImageHeader} style={styles.header} >
        <Image source={Logo} style={styles.logo} />
        <View style={styles.hello}>
          <Text style={styles.selamat}> Selamat Datang, </Text>
          <Text style={styles.username}> Ardi Manalu </Text>
        </View>
      </ImageBackground>
      <Saldo />
      
        <View style={styles.layanan}>
        <Text style={styles.label}> Layanan Kami</Text>
          <View style={styles.iconlayanan}>
          <ButtonIcon title="Kiloan" type="layanan" />
          <ButtonIcon title="Satuan" type="layanan" />
          <ButtonIcon title="VIP" type="layanan" />
          <ButtonIcon title="Karpet" type="layanan" />
          <ButtonIcon title="Setrika Saja" type="layanan" />
          <ButtonIcon title="Eskpress" type="layanan" />
          </View>
          </View>

          <View style={styles.pesananAktif}>
            <Text style={styles.label}>Pesanan Aktif</Text>
            <PesananAktif title="Pesanan No.00000001" status="Sudah Selesai"/>
            <PesananAktif title="Pesanan No.00000002" status="Proses Pengeringan"/>
            <PesananAktif title="Pesanan No.00000003" status="Belum Selesai"/> 
            <PesananAktif title="Pesanan No.00000004" status="Belum Selesai"/>
          </View>
      
          </ScrollView>
    </View>
  );
};

export default Home;

const windowWidth = Dimensions.get('window').width;
const windowHeight= Dimensions.get('window').height;


const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    backgroundColor: 'white',
  },
  header:{
    width: windowWidth,
    height: windowHeight * 0.3,
    paddingHorizontal: 30,
    paddingTop: 10,  
  },
  logo: {
    width: windowWidth * 0.26,
    height: windowHeight * 0.06,
  },
  hello: {
    marginTop: windowHeight * 0.025,
  },
  selamat: {
    fontSize:20,
    fontFamily: 'TitilliumWeb-Regular', 
  },
  username: {
    fontSize: 22,
    fontFamily: 'TitilliumWeb-Bold',
  },
  layanan: {
    paddingLeft:30,
    paddingTop:15,
  },
  label:{
    fontSize:18,
    fontFamily: 'TitilliumWeb-Bold'
  },
  iconlayanan:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:10,
    flexWrap: 'wrap',
  },
  pesananAktif: {
    paddingHorizontal: 30,
    backgroundColor: WARNA_ABU_ABU,
    flex:1,
    borderTopRightRadius:20,
    borderTopLeftRadius: 20,
  }
});
