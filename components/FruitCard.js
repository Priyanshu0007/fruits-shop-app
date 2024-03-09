import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { HeartIcon } from 'react-native-heroicons/solid'

const FruitCard = ({fruit}) => {
    const [isFavourite,setIsFavourite]=useState(false)
  return (
    <View style={{width: 250,marginHorizontal:20,borderRadius: 40, backgroundColor: fruit.color(1)}} className={``}>
        <View style={{justifyContent: 'flex-end', alignItems: 'flex-end' }} className="flex-end justify-end">
            <TouchableOpacity onPress={()=>setIsFavourite(!isFavourite)} style={{padding:12,borderRadius:999,marginRight:16,marginTop:16,backgroundColor:'rgba(255,255,255,0.3)'}}>
                <HeartIcon color={isFavourite ? fruit.shadow : "white"} size={25} />
            </TouchableOpacity>
        </View>
        <View className="justify-items-center flex-row" style={{
            shadowColor: fruit.shadow,
            shadowRadius: 40,
            shadowOffset: {width: 0, height: 50},
            shadowOpacity: 0.6,
            }}>
            <Image source={fruit.image} style={{width:210,height:210}}/>
        </View>
        <View style={{marginLeft:16,marginVertical:16}} className="">
            <Text style={{fontSize: 24,fontWeight: 'bold', color: '#fff', textShadowColor: '#000', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 2 }} className="font-bold text-xl text-white shadow">{fruit.name}</Text>
            <Text style={{fontSize: 20,fontWeight: 'bold', color: '#fff', textShadowColor: '#000', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 2 }} className="font-bold text-lg text-white shadow tracking-wide  ">$ {fruit.price}</Text>
        </View>
    </View>
  )
}

export default FruitCard