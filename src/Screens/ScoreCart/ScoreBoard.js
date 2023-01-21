import {View, Image, StyleSheet, Text} from 'react-native';
import React from 'react';
import Issue from '../../assets/images/issue.png';
import bg from '../../assets/images/bg.png';
import Time from '../../assets/images/time.png';
import CustomIcon from '../../CustomComponents/CustomIcon';
// import BG from '../../assets/images/bg.png';

export default function ScoreBoard({config, research}) {
  return (
    <>
      <View
        style={[
          styles.sectionContainer,
          {
            height: parseInt(config.height / 6.5),
            backgroundColor: research ? 'white' : '#6231AD',
          },
        ]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 14,
                color: research ? 'black' : '#D2BAF5',
                fontFamily: research ? 'Montserrat-Regular' : 'Avenir Next',
                lineHeight: 16,
                fontWeight: research ? '400' : '600',
              }}>
              UNDER OR OVER
            </Text>
            {!research && (
              <Image
                source={Issue}
                resizeMode="cover"
                style={{width: 19, height: 19, bottom: 3, left: 4}}
              />
            )}
          </View>
          <View
            style={{
              width: '50%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <Text
              style={{
                fontSize: 14,
                color: research ? 'black' : '#B296DC',
                fontFamily: 'Montserrat-Regular',
                lineHeight: 16,
                fontWeight: research ? '300' : '400',
              }}>
              Starting in
            </Text>
            <View style={{bottom: 2}}>
              <CustomIcon
                name={'time'}
                style={{
                  color: research ? '#B5C0C8' : '#D2BAF5',
                  fontSize: 14,
                  paddingHorizontal: 4,
                }}
              />
            </View>
            <Text
              style={{
                fontSize: 14,
                color: research ? '#B5C0C8' : '#B296DC',
                fontFamily: 'Montserrat-Regular',
                lineHeight: 15,
                fontWeight: '600',
              }}>
              03:23:12
            </Text>
          </View>
        </View>
        <View
          style={{
            width: config.width / 1.2,
            height: 95,
            flexDirection: 'row',
          }}>
          <View
            style={{
              paddingTop: 50,
              height: 100,
              alignItems: 'flex-start',
            }}>
            <Text
              style={{
                fontSize: 14,
                color: research ? 'black' : '#D2BAF5',
                fontFamily: 'Montserrat-Regular',
                lineHeight: 19,
                fontWeight: research ? '500' : '600',
                top: -8,
              }}>
              {research
                ? "Shift predects Bitcoin's value will reach"
                : 'Bitcoin price will be under'}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                position: 'relative',
                alignContent: 'space-between',
                justifyContent: 'flex-start',
                zIndex: 0,
                bottom: 5,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: research ? 'black' : '#ffffff',
                  fontFamily: 'Montserrat-Regular',
                  lineHeight: 16,
                  fontWeight: '700',
                }}>
                {research ? '$24524' : '$24,524'}
              </Text>
              {!research && (
                <Text
                  style={{
                    fontSize: 13,
                    color: '#ffffff',
                    fontFamily: 'Montserrat-Regular',
                    lineHeight: 14,
                    fontWeight: '500',
                    zIndex: 1,
                  }}>
                  {" at 7 a ET on 22nd Jan'21"}
                </Text>
              )}
            </View>
          </View>
          {!research && (
            <View
              style={{
                position: 'relative',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                left: 5,
                bottom: 5,
              }}>
              <CustomIcon
                name={'Ellipsebig'}
                style={{
                  color: '#5929A1',
                  fontSize: 47,
                  lineHeight: 47,
                }}
              />
              <View
                style={{
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  position: 'absolute',
                  backgroundColor: '#542898',
                  borderTopLeftRadius: 25,
                  borderTopRightRadius: 25,
                }}>
                <Image source={bg} style={{width: 75, height: 45}} />
              </View>
            </View>
          )}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    alignItems: 'stretch',
    justifyContent: 'space-between',
    width: '100%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    padding: 20,
    zIndex: 0,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
