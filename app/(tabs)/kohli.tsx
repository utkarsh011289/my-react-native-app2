import React from 'react'
import { Image,Text,ScrollView } from 'react-native';

export const kohli = () => {
  return (
    
    <ScrollView>
    <Image
          style={{ width: 800, height: 500, }}
          source={require("./images/kohli.jpeg")}
        />
        <Text><h1>
        Kohli was a key member of the Indian team that won the 2011 Cricket World Cup,
         2013 Champions Trophy and 2024 T20 World Cup and captained India to win 
         the ICC Test mace three consecutive times in 2017, 2018, and 2019.[5]
          He represents Royal Challengers Bengaluru in the Indian Premier League 
          and Delhi in domestic cricket.</h1>
        </Text>
        </ScrollView>
  )
}
export default kohli;
