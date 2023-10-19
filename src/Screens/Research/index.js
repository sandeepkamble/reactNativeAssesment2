import {View, Text} from 'react-native';
import React from 'react';
import ScreenLayout from '../../ScreenLayout';
import {scoreCartStyles} from './Styles';
import ScoreBoard from '../ScoreCart/ScoreBoard';
import CustomIcon from '../../CustomComponents/CustomIcon';
import {TouchableOpacity} from 'react-native';
import Modal from '../ScoreCart/SharedScreens/modal';
export default function Research({config}) {
  const openModal = () => {
    config.toggleModal({
      open: true,
      data: {
        modalProps: {
          //Modal data
          okClick: () => {},
        },
      },
      component: Modal,
    });
  };
  return (
    <ScreenLayout hideHeader config={config} header={'ScoreCart'}>
      <View style={scoreCartStyles.mainContainer}>
        <Text style={scoreCartStyles.headerText}>Today's Games</Text>
        <View
          style={[scoreCartStyles.subContainer, {width: config.width - 40}]}>
          <View style={scoreCartStyles.scoreCartContainer}>
            <ScoreBoard config={config} research={true} />
          </View>

          <View style={scoreCartStyles.progressLineText}>
            <Text style={scoreCartStyles.progressLineTextLable}>
              232 predicted under
            </Text>
            <Text style={scoreCartStyles.progressLineTextLable}>
              123 predicted over
            </Text>
          </View>
          <View style={scoreCartStyles.progressLine}>
            <View style={scoreCartStyles.progressLineSubContainer}>
              <View style={scoreCartStyles.leftProgressLine} />
              <View style={scoreCartStyles.rightProgressLine} />
            </View>
          </View>
          <View style={scoreCartStyles.progressContainer}>
            <View style={scoreCartStyles.progressSubContainer}>
              <CustomIcon
                name={'profile'}
                style={scoreCartStyles.sectionIcon}
              />
              <Text style={scoreCartStyles.progressSubContainerText}>355</Text>
            </View>
            <View
              style={[
                scoreCartStyles.progressSubContainer,
                {justifyContent: 'flex-end'},
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
          <View
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
          </View>
        </View>
      </View>
 
    </ScreenLayout>
  );
}
