import React from 'react'
import { Image,Text,ScrollView } from 'react-native';

export const sachin = () => {
  return (
    <ScrollView>
    <Image
          style={{ width: 800, height: 500, }}
          source={require("./images/sachin.webp")}
        />
        <Text><h1>
        2011–12: World Cup win and final years
Historic Moment during winning of 2011 Cricket World Cup
See also: India at the Cricket World Cup § India at the 2011 World Cup
From February to April, Bangladesh, India, and Sri Lanka hosted the 2011 World Cup.
 Amassing 482 runs at an average of 53.55 including two centuries, 
 Tendulkar was India's leading run-scorer for the tournament; 
 only Tillakaratne Dilshan of Sri Lanka scored more runs in the 2011 tournament,[251]
  and was named in the ICC "Team of the Tournament".
  [252] India defeated Sri Lanka in the final.[253]
   Shortly after the victory,
    Tendulkar commented that "Winning the World Cup is the proudest moment of my life.
    ... I couldn't control my tears of joy.</h1>
        </Text>
        </ScrollView>
         )
}
export default sachin;
