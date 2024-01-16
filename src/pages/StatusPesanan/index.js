import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { MyHeader } from '../../components'

export default function StatusPesanan({navigation}) {
    const PageBack = () => {
        navigation.goBack()
    }
  return (
    <View style={{flex:1, backgroundColor:"white"}}>
     {/* HEADER */}
     <MyHeader judul="Status Pesanan" onPress={PageBack}/>

     <ScrollView>
        <View>
            {/* NANTI DISINI ADA STATUS PESANAN USER  */}
            {/* ID PESANAN */}
            {/* MENAMPILKAN STATUS PESANAN SEPERTI : PESANAN SEDANG DI KEMAS/DIANTAR/SELESAI/DIBATALKAN */}
        </View>
     </ScrollView>
    </View>
  )
}