import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native';
import StarRating from 'react-native-star-rating';
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
      <View style={{borderTopLeftRadius:45,borderTopRightRadius:45}} className='bg-orange-50 flex-1 px-6 space-y-2'>
        <Text className="text-gray-600 mt-8 text-2xl font-bold">
            {fruit.name}
        </Text>
        <View className='flex-row justify-between'>
            <Text className='text-gray-500 font-semibold'>{fruit.desc}</Text>
            <Text className='text-gray-500 font-semibold'>
                Sold <Text className='text-gray-800 font-extrabold'>{290}</Text>
            </Text>
        </View>
        <StarRating disabled={true} starSize={18} containerStyle={{width:120}} maxStars={5} emptyStarColor='lightgray' rating={fruit.stars} fullStar={require('../assets/images/fullStar.png')} />
        <View style={{height:165}}>
            <Text className='text-gray-500 tracking-wider py-3'>Aliqua anim reprehenderit esse nostrud do consequat cillum. Non ut excepteur laboris labore nostrud elit dolor est ad do ut irure. Ipsum consectetur et ex id do id deserunt pariatur culpa elit. Ad nulla ipsum consequat qui. Laboris commodo dolore nostrud laboris mollit excepteur. Officia reprehenderit consequat commodo eiusmod </Text>
        </View>
        <View className='flex-row justify-between items-center'>
            <Text className='text-3xl'>$ {fruit.price}</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Cart')} className='text-3xl p-3 ml-6 flex-1 rounded-xl' style={{backgroundColor:fruit.shadow,opacity:0.3,shadowColor:fruit.shadow,shadowRadius:25,shadowOffset:{width:0,height:15},shadowOpacity:0.5}}>
                <Text className='text-xl text-center text-white font-bold'>Add to Cart</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}