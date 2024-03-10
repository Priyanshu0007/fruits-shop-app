import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function FruitCardSales({fruit}) {
  const nagviation=useNavigation();
  return (
    <View className="mr-6">
      <TouchableOpacity onPress={()=>nagviation.navigate('Product',{...fruit,color:fruit.color(1)})} className="flex-row justify-center -mb-9 shadow-lg z-20">
        <Image source={fruit.image} style={{width:65,height:65,shadowColor:fruit.shadowColor,overflow:'visible',shadowRadius:15,shadowOffset:{width:0,height:20},shadowOpacity:0.4}}/>
      </TouchableOpacity>
      <View className="rounded-3xl flex justify-end items-center" style={{backgroundColor:fruit.color(0.4),height:75,width:80}}>
        <Text className="font-semibold text-center text-gray-800 pb-3"> $ {fruit.price}</Text>
      </View>
    </View>
  )
}