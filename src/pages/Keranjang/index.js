import { View, Text, Image, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import { MyButton, MyGap, MyHeader } from '../../components'
import { MyDimensi, colors, fonts } from '../../utils'
import { ScrollView } from 'react-native-gesture-handler'

export default function Keranjang({navigation}) {
    const PageBack = () => {
        navigation.goBack()
    }
  return (
    <View style={{flex:1, backgroundColor:'white'}}>

    {/* HEADER */}
    <MyHeader judul="Keranjang" onPress={PageBack}/>
<ScrollView>
    {/* MAIN CONTENT */}
    {/* NANTI DISINI AKAN MENAMPILKAN PRODUK YANG DI PESAN OLEH USER */}
    {/* ALAMAT, PRODUK, OPSI PENGIRIMAN, TOTAL HARGA, BUKTI TF */}
</ScrollView>

{/* TOMBOL CHECKOUT */}
<MyButton title="Buat Pesanan" onPress={() => navigation.navigate('Checkout')}/>

    </View>
  )
}