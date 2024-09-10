import React from 'react'
import { Image,Text,ScrollView } from 'react-native';

export const dhoni = () => {
  return (
    <ScrollView>
    <Image
          style={{ width: 800, height: 500, }}
          source={require("./images/dhoni.jpg")}
        />
        <Text><h1>
        Dhoni led India to victory in the 2016 Asia Cup where India remained unbeaten.
        [95] Dhoni stepped down as captain of India in January 2017 ahead of the ODI series at
         home against England.[96] In the second game of the series, 
         he scored 134 off 122 balls, his tenth century in ODIs
          and his first in over three years.[97] He was named as a wicket-keeper of the 'Team of the Tournament'
           at the 2017 ICC Champions Trophy in which India finished as runners-up.[98][99] 
           In August 2017, during the fifth and final ODI against Sri Lanka in Colombo, 
           he became the first wicket-keeper to effect 100 stumpings in ODIs 
           when he stumped Akila Dananjaya off Yuzvendra Chahal.[100]
            He reached the milestone of effecting 400 dismissals in ODIs in February 2018,
             following the stumping of Aiden Markram in the third ODI of the South Africa tour.[101]
            </h1> </Text>
        </ScrollView>
  )
}
export default dhoni;
