import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native';

export default function ProductScreen(props) {
    let fruit=props.route.params;
    const navigation=useNavigation()
  return (
    <View className="flex-1" style={{backgroundColor:fruit.color}}>
      <SafeAreaView>
        <View className="flex-row justify-start mx-5">
            <TouchableOpacity style={{backgroundColor:'rgba(255,255,255,0.2)'}} className='border border-gray-50 rounded-xl' onPress={()=>navigation.goBack()}>
                <ChevronLeftIcon size={30} color='white' />
            </TouchableOpacity>
        </View>
        <View className='flex-row justify-center mt-5 pb-10' style={{shadowColor:fruit.shadow,shadowRadius:50,shadowOffset:{width:0,height:50},shadowOpacity:0.3}}>
            <Image source={fruit.image} style={{width:290,height:290}} />
        </View>
      </SafeAreaView>
    </View>
  )
}