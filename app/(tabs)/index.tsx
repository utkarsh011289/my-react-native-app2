import { Image, StyleSheet, Platform,Text,ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
  <ScrollView>
        <Image
          style={{ width: 1550, height: 400, }}
          source={require("./images/flag.png")}
        />
        <Text><h1>The India men's national cricket team represents India 
          in men's international cricket. It is governed by the Board 
          of Control for Cricket in India, and is a Full Member of the
          International Cricket Council with Test, One Day International
           and Twenty20 International status
           Early history (1700s–1918)
          See also: History of cricket in India to 1918
          The British brought cricket to India in the early 1700s, with the first cricket match played in 1721.
          [11] It was played and adopted by Kolis of Gujarat because they were sea pirates and outlaws who always loot
           the British ships so East India Company tried to manage the Kolis in cricket and been successful.[12][13][14]
            In 1848, the Parsi community in Mumbai formed the Oriental Cricket Club, the first cricket club to be established
             by Indians. After slow beginnings, the Europeans eventually invited the Parsis to play a match in 1877.[15] By 1912,
              the Parsis, Hindus, Sikhs and Muslims of Bombay played a quadrangular tournament with the Europeans every year.[15] 
              In the early 1900s, some Indians went on to play for the England cricket team. Some of these, such as Ranjitsinhji and
               Duleepsinhji were greatly appreciated by the British and their names went on to be used for the Ranji Trophy and Duleep 
               Trophy – two major first-class tournaments in India. In 1911, an Indian men's cricket team, captained by Bhupinder Singh of 
               Patiala, went on their first official tour of the British Isles, but only played English county teams and not the England 
               cricket team</h1></Text>
</ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
