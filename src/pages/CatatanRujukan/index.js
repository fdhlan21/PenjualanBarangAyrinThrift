import { View, Text } from 'react-native'
import React from 'react'
import { MyDimensi, colors, fonts } from '../../utils'
import { ScrollView } from 'react-native-gesture-handler'
import { MyButton, MyCalendar, MyGap, MyInput, MyPicker } from '../../components'

export default function CatatanRujukan({navigation}) {
  return (
    <View style={{flex:1, backgroundColor:"white"}}>
      
    {/* HEADER */}
    <View style={{padding:10, backgroundColor: colors.primary, borderBottomRightRadius:5, borderBottomLeftRadius:5}}>
            <Text style={{
                fontFamily: fonts.primary[600],
                color:"white",
                textAlign:'center',
                fontSize: MyDimensi / 4.1,

            }}>
                Catata Rujukan
            </Text>
    </View>
    {/* END HEADER */}

    <ScrollView>

<View style={{
    padding:10,
}}>

            {/* INPUT KODE SETIAP PASIEN */}
            <MyInput label="Kode Pasien"  placeholder="Masukan Kode Pasien"/>

            <MyGap jarak={20}/>

            {/* INPUT TANGGAL RUJUKAN*/}
            <MyCalendar label="Tanggal Rujukan"/>

            <MyGap jarak={20}/>

            {/* INPUT NAMA PETUGAS YANG MERUJUK*/}
            <MyInput label="Nama Petugas Yang Merujuk"  placeholder="Nama Petugas Yang Merujuk"/>

            <MyGap jarak={20}/>

            {/* INPUT NAMA PASIEN YANG DIRUJUK*/}
            <MyInput label="Nama Pasien Yang Dirujuk"  placeholder="Nama Pasien Yang Dirujuk"/>

            <MyGap jarak={20}/>

            {/* INPUT NAMA PASIEN YANG DIRUJUK*/}
            <MyPicker label="Faskes Yang Merujuk" data={[
                {
                    label:'PKM Nunukan', 
                    value:'PKM Nunukan',
                },
                {
                    label:'PKM Nunukan Timur', 
                    value:'PKM Nunukan Timur'
                },
                {
                    label:'PKM Binusan', 
                    value:'PKM Binusan'
                },
                {
                    label:'PKM Sedadap', 
                    value:'PKM Sedadap'
                },
                {
                    label:'PKM Simenggaris', 
                    value:'PKM Simenggaris'
                },
                {
                    label:'PKM Setabu', 
                    value:'PKM Setabu'
                },
                {
                    label:'PKM Sungai Taiwan', 
                    value:'PKM Sungai Taiwan'
                },
                {
                    label:'PKM Sungai Nyamuk', 
                    value:'PKM Sungai Nyamuk'
                },
                {
                    label:'PKM Sebatik Utara', 
                    value:'PKM Sebatik Utara'
                },
                {
                    label:'PKM Aji Kuning', 
                    value:'PKM Aji Kuning'
                },
                {
                    label:'PKM Pembeliangan', 
                    value:'PKM Pembeliangan'
                },
                {
                    label:'PKM Sanur', 
                    value:'PKM Sanur'
                },
                {
                    label:'PKM Atap', 
                    value:'PKM Atap'
                },
                {
                    label:'PKM Tanjung Harapan', 
                    value:'PKM Tanjung Harapan'
                },
                {
                    label:'PKM Mansalong', 
                    value:'PKM Mansalong'
                },
                {
                    label:'PKM Binter', 
                    value:'PKM Binter'
                },
                {
                    label:'PKM Long Bawan', 
                    value:'PKM Long Bawan'
                },
                {
                    label:'PKM Long Layu', 
                    value:'PKM Long Layu'
                },
                {
                    label:'RSP Sebatik', 
                    value:'RSP Sebatik'
                },
                {
                    label:'RSP Sebuku', 
                    value:'RSP Sebuku'
                },
                {
                    label:'RSP Krayan', 
                    value:'RSP Krayan'
                },
            ]}/>
            

            <MyGap jarak={30}/>

            {/* PICKER FASKER TUJUAN RUJUKAN */}
            <MyPicker label="Faskes Tujuan Rujukan" data={[
                {
                    label:'RSUD Nunukan',
                    value:'RSUD Nunukan',
                },

                {
                    label:'RSUD Malinau',
                    value:'RSUD Malinau',
                },

                {
                    label:'RSUD Tarakan',
                    value:'RSUD Tarakan',
                },
                
            ]}/>


            <MyGap jarak={20}/>

            {/* INPUT NAMA PASIEN YANG DIRUJUK*/}

            <MyInput label="Nomor Surat Tugas" placeholder="Nomor Surat Tugas"/>

            <MyGap jarak={20}/>

            {/* INPUT NAMA PASIEN YANG DIRUJUK*/}

            <MyInput label="Nomor SPPD" placeholder="Nomor SPPD"/>


            <MyGap jarak={20}/>

            {/* INPUT NAMA PASIEN YANG DIRUJUK*/}

            <MyInput label="Estimasi Pembiayaan" placeholder="Estimasi Pembiayaan"/>


            <MyGap jarak={20}/>

            {/* INPUT NAMA PASIEN YANG DIRUJUK*/}

            <MyInput label="Jumlah Klaim" placeholder="Jumlah Klaim"/>

            <MyGap jarak={20}/>

            {/* BUTTON SIMPAN */}
            <MyButton title="Simpan" Icons="log-in"/>

            <MyGap jarak={20}/>

            {/* BUTTON RIVIEW */}
            <MyButton title="Riview" Icons="eye"/>


            <MyGap jarak={20}/>

            {/* BUTTON RIVIEW */}
            <MyButton title="Konfirmasi" Icons="checkmark-done-circle"/>
</View>
    </ScrollView>
    </View>
  )
}