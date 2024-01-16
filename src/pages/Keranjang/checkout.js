import { View, Text } from 'react-native'
import React from 'react'
import { MyHeader } from '../../components'
import { ScrollView } from 'react-native-gesture-handler'
import { colors, fonts } from '../../utils'

export default function Checkout({navigation}) {
    const PageBack = () => {
        navigation.goBack()
    }
  return (
    <View style={{flex:1, backgroundColor:"white"}}>
    {/* HEADER */}
    <MyHeader judul="Pembayaran" onPress={PageBack}/>

    {/* MAIN CONTENT */}
    <ScrollView>
        <View style={{padding:10,}}>
            {/* MASUKAN KONTENNYA DISINI */}
        </View>
    </ScrollView>
    </View>
  )
}