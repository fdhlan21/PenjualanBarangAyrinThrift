import { View, Text, Image, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { MyGap, MyHeader } from '../../components'
import { MyDimensi, fonts, colors } from '../../utils'

export default function KatalogProduk({navigation}) {
    const PageBack = () => {
        navigation.goBack()
    }
  return (
    <View style={{
        flex:1,
        backgroundColor:'white'
    }}>
  {/* HEADER */}
      <MyHeader judul="Katalog Produk" onPress={PageBack}/>


    <ScrollView>
      <View style={{
        padding:10,
        marginTop:10,


      }}>
        {/* MAIN CONTENT */}
        
        {/*  REKOMENDARI PRODUK*/}
        <View style={{flexDirection:"row", padding:10, justifyContent: 'flex-start',}}>
  <View style={{padding:1, backgroundColor:colors.primary, width: 30, height: 1}}></View>
  <Text style={{fontFamily:fonts.primary[400], top: -8, left: 10}}>Rekomendasi Produk</Text>
  </View>
  {/* NANTI MENAMPILKAN PRODUK DENGAN RATING TERTINGGI DISINI */}
  

         <View style={{flexDirection:"row", justifyContent:'space-around'}}>

         {/* CONTOH PRODUK 1 */}
        <TouchableNativeFeedback onPress={() => navigation.navigate('RiviewProduk')} style={{
        }}>
        <View style={{
            padding:10,
            backgroundColor:colors.secondary,
            borderRadius:5,
            height:210,
            width:150,
        }}>
              {/* GAMBAR PRODUK */}
              <Image source={require('../../assets/produk1.png')} style={{
                height:120,
                width:120,
                alignSelf:"center",
                borderRadius:5,

            }}/>

            {/* JUDUL PRDUK */}
            <Text style={{
                textAlign:"center",
                fontFamily:fonts.primary[600],
                color:"white",
                top:10,
                fontSize: MyDimensi / 4
                
            }}>


            
                Kaos Zavalabs
            </Text>



             {/* HARGA PRDUK */}
             <Text style={{
                textAlign:"center",
                fontFamily:fonts.primary[600],
                color:"white",
                top:5,
                fontSize: MyDimensi / 5,

                
            }}>


            
                Rp. 10000
            </Text>

            {/* RATE PRODUK */}
            <View style={{flexDirection:'row', flex:1, justifyContent:'center', marginTop:5,
            }}>
                <Image source={require('../../assets/star.png')} style={{
                    width:15,
                    height:15,
                    left: -5

                }}/>
                <Text style={{
                    color:'white',
                    left:5


                }}>8,9</Text>
            </View>
        </View>
        </TouchableNativeFeedback>

                 {/* CONTOH PRODUK 1 */}
        <TouchableNativeFeedback style={{
        }}>
        <View style={{
            padding:10,
            backgroundColor:colors.secondary,
            borderRadius:5,
            height:210,
            width:150,
        }}>
              {/* GAMBAR PRODUK */}
              <Image source={require('../../assets/produk1.png')} style={{
                height:120,
                width:120,
                alignSelf:"center",
                borderRadius:5,

            }}/>

            {/* JUDUL PRDUK */}
            <Text style={{
                textAlign:"center",
                fontFamily:fonts.primary[600],
                color:"white",
                top:10,
                fontSize: MyDimensi / 4
                
            }}>


            
                Kaos Zavalabs
            </Text>



             {/* HARGA PRDUK */}
             <Text style={{
                textAlign:"center",
                fontFamily:fonts.primary[600],
                color:"white",
                top:5,
                fontSize: MyDimensi / 5,

                
            }}>


            
                Rp. 10000
            </Text>

            {/* RATE PRODUK */}
            <View style={{flexDirection:'row', flex:1, justifyContent:'center', marginTop:5,
            }}>
                <Image source={require('../../assets/star.png')} style={{
                    width:15,
                    height:15,
                    left: -5

                }}/>
                <Text style={{
                    color:'white',
                    left:5


                }}>8,9</Text>
            </View>
        </View>
        </TouchableNativeFeedback>



          
         </View>

{/* END REKOMENDARI PRODUK RATING */}

{/* LIST LIST PRODUK BIASA */}


<View style={{flexDirection:"row", justifyContent:'space-around', marginTop:50}}>

{/* CONTOH PRODUK 1 */}
<TouchableNativeFeedback style={{
}}>
<View style={{
   padding:10,
   backgroundColor:colors.primary,
   borderRadius:5,
   height:210,
   width:150,
}}>
     {/* GAMBAR PRODUK */}
     <Image source={require('../../assets/produk2.png')} style={{
       height:120,
       width:120,
       alignSelf:"center",
       borderRadius:5,

   }}/>

   {/* JUDUL PRDUK */}
   <Text style={{
       textAlign:"center",
       fontFamily:fonts.primary[600],
       color:"white",
       top:10,
       fontSize: MyDimensi / 4
       
   }}>


   
       Kaos Zavalabs
   </Text>



    {/* HARGA PRDUK */}
    <Text style={{
       textAlign:"center",
       fontFamily:fonts.primary[600],
       color:"white",
       top:5,
       fontSize: MyDimensi / 5,

       
   }}>


   
       Rp. 10000
   </Text>

   {/* RATE PRODUK */}
   <View style={{flexDirection:'row', flex:1, justifyContent:'center', marginTop:5,
   }}>
       <Image source={require('../../assets/star.png')} style={{
           width:15,
           height:15,
           left: -5

       }}/>
       <Text style={{
           color:'white',
           left:5


       }}>8,9</Text>
   </View>
</View>
</TouchableNativeFeedback>



       {/* CONTOH PRODUK 1 */}
       <TouchableNativeFeedback style={{
}}>
<View style={{
   padding:10,
   backgroundColor:colors.primary,
   borderRadius:5,
   height:210,
   width:150,
}}>
     {/* GAMBAR PRODUK */}
     <Image source={require('../../assets/produk2.png')} style={{
       height:120,
       width:120,
       alignSelf:"center",
       borderRadius:5,

   }}/>

   {/* JUDUL PRDUK */}
   <Text style={{
       textAlign:"center",
       fontFamily:fonts.primary[600],
       color:"white",
       top:10,
       fontSize: MyDimensi / 4
       
   }}>


   
       Kaos Zavalabs
   </Text>



    {/* HARGA PRDUK */}
    <Text style={{
       textAlign:"center",
       fontFamily:fonts.primary[600],
       color:"white",
       top:5,
       fontSize: MyDimensi / 5,

       
   }}>


   
       Rp. 10000
   </Text>

   {/* RATE PRODUK */}
   <View style={{flexDirection:'row', flex:1, justifyContent:'center', marginTop:5,
   }}>
       <Image source={require('../../assets/star.png')} style={{
           width:15,
           height:15,
           left: -5

       }}/>
       <Text style={{
           color:'white',
           left:5


       }}>8,9</Text>
   </View>
</View>
</TouchableNativeFeedback>
</View>



      </View>



      
    </ScrollView>
    </View>
  )
}