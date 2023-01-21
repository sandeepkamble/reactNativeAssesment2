import {View, TouchableOpacity, Text, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import headeFace from '../assets/images/headerFaceIcon.png';
import CustomIcon from '../CustomComponents/CustomIcon';

export default function Header({config, title}) {
  // const navigation = useNavigation();
  return (
    <View
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        height: 60,
        width: config.width,
      }}>
      <View style={{marginHorizontal: 7}}>
        <Image source={headeFace} style={{width: 35, height: 35}} />
      </View>
      <View
        style={{
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          // width: '100%',
          // position: 'absolute',
        }}>
        <Text
          style={{
            fontSize: 14,
            lineHeight: 21,
            fontFamily: 'Montserrat-Regular',
            color: '#727682',
            fontWeight: '600',
          }}>
          {title}
        </Text>
      </View>
      <View style={{marginHorizontal: 7}}>
        <View
          style={{
            backgroundColor: '#6231AD',
            width: 18,
            height: 18,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 18,
            alignSelf: 'flex-end',
            position: 'absolute',
            zIndex: 1,
          }}>
          <Text style={{color: '#FFFFFF', fontSize: 11}}>1</Text>
        </View>
        <CustomIcon
          name={'message'}
          style={{color: '#727682', fontSize: 35, lineHeight: 35}}
        />
      </View>
    </View>
  );
}
