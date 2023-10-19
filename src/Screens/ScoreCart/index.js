import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import ScreenLayout from '../../ScreenLayout';
import ScoreBoard from './ScoreBoard';
import Arrow from '../../assets/images/arrow.png';
import Profile from '../../assets/images/Profile.png';
import ViewChart from '../../assets/images/ViewChart.png';
import {scoreCartStyles} from './Styles';
import Modal from './SharedScreens/modal';
import CustomIcon from '../../CustomComponents/CustomIcon';

export default function ScoreCart({config}) {
  const data = [
    {lable: 'PRIZE POOL', amount: '$12,000', coin: false},
    {lable: 'UNDER', amount: '3.25x', coin: false},
    {lable: 'OPER', amount: '1.25x', coin: false},
    {lable: 'ENTRY FEES', amount: '5', coin: true},
  ];

  // useEffect(() => {
  //   openModal();
  // }, []);

  return (
    <ScreenLayout hideHeader config={config} header={'ScoreCart'}>
      <View style={scoreCartStyles.mainContainer}>
        <Text style={scoreCartStyles.headerText}>Today's Games</Text>
        <View
          style={[scoreCartStyles.subContainer, {width: config.width - 40}]}>
          <View style={scoreCartStyles.scoreCartContainer}>
            <ScoreBoard config={config} />
          </View>

          <View style={scoreCartStyles.boardData}>
            {data.map((menu, index) => {
              return (
                <View key={menu.lable} style={{justifyContent: 'space-evenly'}}>
                  <Text
                    style={{
                      fontFamily: 'Montserrat-Regular',
                      fontWeight: '500',
                      fontSize: 12,
                      lineHeight: 15,
                      textAlign: 'right',
                      color: '#B5C0C8',
                    }}>
                    {menu.lable}
                  </Text>
                  <Text
                    style={{
                      color: '#333333',
                      textAlign: index + 1 === data.length ? 'right' : 'left',
                      fontFamily: 'Avenir Next',
                      fontWeight: '600',
                      fontSize: 14,
                      lineHeight: 19,
                    }}>
                    {menu.amount}{' '}
                    {menu.coin && (
                      <CustomIcon
                        name={'Group-12290'}
                        style={{color: '#FFD600'}}
                      />
                    )}
                  </Text>
                </View>
              );
            })}
          </View>

          <View style={scoreCartStyles.therdSection}>
            
              <Text style={[scoreCartStyles.sectionLableText,{marginTop:20}]}>
                What your prediction?
              </Text>
            
            <View style={[scoreCartStyles.sectionButtonContainer,{marginTop:20}]}>
              <TouchableOpacity
                style={[
                  scoreCartStyles.sectionButton,
                  {
                    borderRadius: parseInt(config.width / 1.7),
                    height: config.height / 19,
                    width: config.width / 2.8,
                  },
                ]}>
                <CustomIcon
                  name={'down'}
                  style={scoreCartStyles.sectionButtonImage}
                />
                <Text style={scoreCartStyles.sectionButtonLable}>Under</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  scoreCartStyles.sectionButton,
                  {
                    borderRadius: parseInt(config.width / 1.7),
                    height: config.height / 19,
                    width: config.width / 2.8,
                    backgroundColor: '#6231AD',
                  },
                ]}>
                <CustomIcon
                  name={'up'}
                  style={scoreCartStyles.sectionButtonImage}
                />
                <Text style={scoreCartStyles.sectionButtonLable}>Over</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={[scoreCartStyles.progressContainer,{marginTop:40,}]}>
            <View style={[scoreCartStyles.progressSubContainer,{alignItems:'center'}]}>
              <CustomIcon
                name={'profile'}
                style={scoreCartStyles.sectionIcon}
              />
              <Text style={scoreCartStyles.progressSubContainerText}>
                355 Players
              </Text>
            </View>
            <View
              style={[
                scoreCartStyles.progressSubContainer,
                {justifyContent: 'flex-end',alignItems:'center'},
              ]}>
              <CustomIcon
                name={'Vector1'}
                style={scoreCartStyles.sectionIcon}
              />
              <Text style={scoreCartStyles.progressSubContainerText}>
                View chart
              </Text>
            </View>
          </View>

          <View style={scoreCartStyles.progressLine}>
            <View style={[scoreCartStyles.progressLineSubContainer,{marginTop:12}]}>
              <View style={scoreCartStyles.leftProgressLine} />
              <View style={scoreCartStyles.rightProgressLine} />
            </View>
            <View style={scoreCartStyles.progressLineText}>
              <Text style={scoreCartStyles.progressLineTextLable}>
                232 predicted under
              </Text>
              <Text style={scoreCartStyles.progressLineTextLable}>
                123 predicted over
              </Text>
            </View>
          </View>
          {/* <View
            style={{
              flex: 0.5,
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <TouchableOpacity
              onPress={openModal}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: parseInt(config.height / 20),
                width: '70%',
                height: 55,
                backgroundColor: '#6231AD',
              }}>
              <Text style={scoreCartStyles.sectionLableText}>Open Modal</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </View>
      {/* <View
        style={{
          zIndex: 5,
          flex: 1,
          width: config.width,
          height: config.height,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Modal config={config} />
      </View> */}
    </ScreenLayout>
  );
}
