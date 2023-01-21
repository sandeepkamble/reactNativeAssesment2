import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Dimensions, TouchableOpacity, View, Text} from 'react-native';
import {footerMenu} from './constData';
import CustomIcon from '../CustomComponents/CustomIcon';

export default function FooterMenu() {
  const {width, height} = Dimensions.get('screen');
  const navigation = useNavigation();

  return (
    <View
      style={{
        width: width - 20,
        height: parseInt(height / 12),
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      {footerMenu?.map(item => {
        return (
          <View
            key={item.key + ''}
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              paddingHorizontal: 15,
              backgroundColor: 'white',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(item.screen);
              }}
              style={{
                height: '50%',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <CustomIcon
                name={item.key}
                style={{
                  fontSize: 25,
                  lineHeight: 30,
                  color: '#727682',
                  opacity: 0.5,
                }}
              />
              <Text
                style={{
                  fontSize: 10,
                  lineHeight: 12,
                  fontWeight: '600',
                  textAlign: 'center',
                  letterSpacing: 0.3,
                  fontFamily: 'Montserrat-Regular',
                  opacity: 0.5,
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}
