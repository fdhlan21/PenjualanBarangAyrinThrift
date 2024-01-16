import { View, Text } from 'react-native'
import React from 'react'
import { MyButton, MyHeader } from '../../components'
import { ScrollView } from 'react-native'

export default function RatingProduk({navigation}) {
    const PageBack = () => {
        navigation.goBack()
    }
  return (
    <View style={{flex:1,}}>

        {/* HEADER */}
        <MyHeader judul="Rating Produk" onPress={PageBack}/>

        <ScrollView>
            <View>
                {/* NANTI DISINI MASUKAN KONTEN RATING PRODUK */}
                {/* BERI RARTING PRODUK 1 -5 */}
                {/* KOMENTAR ULASAN */}
            </View>
        </ScrollView>

        <MyButton title="Kirim Ulasan"/>

    </View>
  )
}