import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronLeftIcon } from 'react-native-heroicons/solid';
import { cartItems } from '../constants';
import FruitCartCard from '../components/FruitCartCard';


export default function CartScreen() {
    const navigation=useNavigation();
  return (
    <SafeAreaView className='flex-1 flex justify-between bg-orange-50 '>
      <View className='flex-row justify-start mx-5 '>
        <TouchableOpacity className='border border-gray-300 rounded-xl' onPress={()=>navigation.goBack()}>
            <ChevronLeftIcon size={30} color='gray' />
        </TouchableOpacity>
      </View>
      <View className='mx-5 flex-1'>
        <Text className='text-gray-600 text-2xl py-10'>
            Your <Text className='font-bold'>Cart</Text>
        </Text>
        <ScrollView className="flex-1">
            {cartItems.map((fruit,index)=>(<FruitCartCard fruit={fruit} key={index}/>))}
        </ScrollView>
        <View className='flex-row justify-center mx-7'>
            <TouchableOpacity style={{
                    backgroundColor: 'orange', 
                    opacity: 0.8,
                    shadowColor: 'orange',
                    shadowRadius: 25,
                    shadowOffset: {width: 0, height: 15},
                    shadowOpacity: 0.4,
                }} className='p-3 flex-1 rounded-xl'>
                <Text className='text-xl text-center text-white font-bold'>Payment</Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}