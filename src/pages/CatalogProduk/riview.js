import { View, Text, Image } from 'react-native'
import React from 'react'
import { MyHeader } from '../../components'
import { ScrollView } from 'react-native-gesture-handler'
import { MyDimensi } from '../../utils'

export default function RiviewProduk({navigation}) {
    const PageBack = () => {
        navigation.goBack()
    }
  return (
    <View style={{
    flex:1,
    backgroundColor:"white",
    }}>
      {/* HEADER */}
      <MyHeader judul="Katalog Produk" onPress={PageBack}/>

      {/* NANTI DISINI MENAMPILKAN POTO PRODUK, JUDUL, DEKSRIPSI, RATING/ RIVIEW DAN TOMBOL PESAN */}

      
     
    </View>
  )
}