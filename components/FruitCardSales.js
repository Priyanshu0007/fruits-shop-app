import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function FruitCardSales({fruit}) {
  return (
    <View className="mr-6">
      <TouchableOpacity>
        <Image source={fruit.image} style={{width:65,height:65,shadowColor:fruit.shadowColor,overflow:'visible',}}/>
      </TouchableOpacity>
      <View className="rounded-3xl flex justify-end items-center" style={{backgroundColor:fruit.color(0.4),height:75,width:80}}>
        <Text className="font-semibold text-center text-gray-800 pb-3"> $ {fruit.price}</Text>
      </View>
    </View>
  )
}