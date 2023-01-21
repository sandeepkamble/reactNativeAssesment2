import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React from 'react';
import BitCoin from '../../../assets/images/bitCoin.png';
import CustomMaskView from './MaskView';
import CustomIcon from '../../../CustomComponents/CustomIcon';
const {width, height} = Dimensions.get('screen');

const numberList = [11, 12, 13, 14, 15, 16, 17];
export default function Modal({config}) {
  const closeModal = () => {
    config.toggleModal({
      open: false,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.modelIndicatorContainer}>
          <View style={styles.modelIndicator}></View>
        </View>
        <Text
          style={{
            color: '#333333',
            fontSize: 16,
            lineHeight: 19,
            fontWeight: '600',
            letterSpacing: 0.7,
          }}>
          Your Prediction is Under
        </Text>
        <View style={{paddingTop: '5%'}}>
          <Text style={styles.entryText}>ENTRY TICKETS</Text>

          <View style={styles.numberContainer}>
            <CustomMaskView>
              <ScrollView
                style={styles.scrollViewStyle}
                contentContainerStyle={styles.scrollViewContainerStyle}>
                {numberList.map((item, index) => {
                  return (
                    <View
                      key={'' + item}
                      style={{
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor:
                          index == parseInt(numberList.length / 2)
                            ? '#f4eee0'
                            : 'white',
                      }}>
                      <Text
                        style={[
                          styles.numberTextStyle,
                          {
                            fontSize:
                              index == parseInt(numberList.length / 2)
                                ? 24
                                : 22,
                            fontWeight:
                              index == parseInt(numberList.length / 2)
                                ? '600'
                                : '400',
                          },
                        ]}>
                        {item}
                      </Text>
                    </View>
                  );
                })}
              </ScrollView>
            </CustomMaskView>
          </View>

          <View style={styles.userSection}>
            <View style={styles.sectionContainerStyles}>
              <View style={styles.userSubSection}>
                <Text style={{color: '#B5C0C8'}}>You can win</Text>
                <Text
                  style={{
                    fontFamily: 'Montserrat-Regular',
                    color: '#03A67F',
                  }}>
                  $2000
                </Text>
              </View>
              <View style={styles.bitCoinContainer}>
                <Text style={{color: '#727682'}}>Total</Text>
                <View style={{paddingHorizontal: 5}}>
                  <CustomIcon
                    name={'Group-12290'}
                    style={{fontFamily: 19, lineHeight: 20, color: '#FFE400'}}
                  />
                </View>
                <Text
                  style={{
                    color: '#333333',
                    fontSize: 14,
                    lineHeight: 18,
                    fontWeight: '600',
                  }}>
                  5
                </Text>
              </View>
            </View>
            <TouchableOpacity onPress={closeModal} style={styles.submitButton}>
              <Text style={styles.submitText}>Submit my prediction</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    top: '5%',
    // backgroundColor: 'red',
  },
  mainContainer: {
    padding: '5%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 0.65,
    width,
    height,
  },
  modelIndicatorContainer: {
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modelIndicator: {
    width: '14%',
    height: 7,
    borderRadius: 9,
    backgroundColor: '#B5C0C8',
  },
  entryText: {
    color: '#727682',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    lineHeight: 15,
    fontWeight: '500',
  },
  numberContainer: {
    height: height / 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewStyle: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(204, 204, 204, 0.3)',
  },
  scrollViewContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
  },
  numberTextStyle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 24,
    lineHeight: 29,
    fontWeight: '600',
    color: '#333333',
  },
  userSection: {
    height: height / 6,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  userSubSection: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  submitText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 17,
    textAlignVertical: 'auto',
    fontFamily: 'Montserrat-Regular',
  },
  submitButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: parseInt(height / 20),
    width: width / 1.1,
    height: 55,
    backgroundColor: '#6231AD',
  },
  bitCoinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionContainerStyles: {
    width: width / 1.1,
    flexDirection: 'row',
    bottom: 20,
    justifyContent: 'space-between',
  },
});
