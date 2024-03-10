import React from 'react'
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import {Bars3CenterLeftIcon, ShoppingCartIcon} from "react-native-heroicons/solid"
import {categories,featuredFruits} from "../constants/index"
import { useState } from 'react';
import FruitCard from '../components/FruitCard';
import FruitCardSales from '../components/FruitCardSales';
import { useNavigation } from '@react-navigation/native';
export default function HomeScreen() {
    const [activeCategorie,setActiveCategorie]=useState("Oranges")
    const navigation=useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-orange-50">
      <View className="mx-5 flex-row justify-between items-center">
        <Bars3CenterLeftIcon size={30} color="black"/>
        <TouchableOpacity onPress={()=>navigation.navigate('Cart')} className="p-2 rounded-xl bg-orange-100">
          <ShoppingCartIcon size={25} color="orange"/>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>

      <View className="mt-4">
        <Text className="text-gray-600 text-2xl tracking-widest font-medium ml-5">Seasonal</Text>
        <Text className="text-gray-600 text-3xl font-semibold ml-5">Fruits & Vegetables</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-8 px-5 ">
          {categories.map((categorie,index)=>{
            let isActive=categorie === activeCategorie
            let textClass=`text-gray-600 text-xl ${isActive ? ' font-bold': ''}`
            return(<TouchableOpacity key={index} className="mr-8 realative" onPress={()=>setActiveCategorie(categorie)}>
              <Text className={textClass}>{categorie}</Text>
              { isActive ? (<Text className="font-extrabold text-orange-400 -mt-4 ml-2">__ _</Text>) : null }
            </TouchableOpacity>)
          })}
        </ScrollView>
      </View>

      <View className="mt-8">
          <ScrollView style={{columnGap: 16,}} horizontal showsHorizontalScrollIndicator={false}>
            {featuredFruits.map((fruit,index)=>(<FruitCard key={index} fruit={fruit}/>))}
          </ScrollView>
      </View>

      <View className="mt-8 pl-5 space-y-1">
          <Text className="text-gray-600 text-xl font-bold">
            Hot Sales!
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="overflow-visible">
            {[...featuredFruits].reverse().map((fruit,index)=><FruitCardSales key={index} fruit={fruit}/>)}
          </ScrollView>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}