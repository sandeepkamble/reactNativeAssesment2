import {View, Text, Image} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import ScreenLayout from '../../ScreenLayout';
import EditImage from '../../assets/images/editProfile.png';
import LocalImage from '../../assets/images/localImage.png';
import Star from '../../assets/images/star.png';
import Logout from '../../assets/images/logout.png';
import CustomIcon from '../../CustomComponents/CustomIcon';

const Profile = ({config}) => {
  const data = [
    {
      key: '1',
      title: 'First Stripe Earned',
      ponit: ' x 3',
      desc: 'Top 10% of heighest spending palyers in a month',
    },
    {
      key: '2',
      title: 'Born Winner',
      desc: 'Top 10% of heighest spending palyers in a month',
    },
    {
      key: '3',
      title: 'Trader of the month',
      desc: 'Won 7 under-over games in a row',
    },
    {
      key: '4',
      title: 'rising Star',
      desc: 'Top 10% of heighest spending palyers in a month',
    },
  ];

  return (
    <ScreenLayout title={'Profile'} config={config} header={'ScoreCart'}>
      <View style={{height: '100%', width: '100%'}}>
        <View style={{paddingVertical: 20, alignItems: 'center'}}>
          <View
            style={{
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <View
              style={{
                position: 'relative',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
              }}>
              <View
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 50,
                  backgroundColor: 'gray',
                }}></View>
              <View
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 50,
                  backgroundColor: 'white',
                  position: 'absolute',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end',
                }}>
                <Image source={EditImage} style={{width: 15, height: 15}} />
              </View>
            </View>

            <Text
              style={{
                paddingVertical: 10,
                fontFamily: 'Montserrat-Regular',
              }}>
              Jina Simons
            </Text>
            <Text
              style={{
                fontFamily: 'Montserrat-Regular',
                color: '#727682',
                paddingBottom: 2,
              }}>
              6000 pts
            </Text>
            <Text
              style={{
                fontFamily: 'Montserrat-Regular',
                textAlign: 'justify',
                paddingHorizontal: 20,
                color: '#727682',
              }}>
              I’m a software developer that has been in the crypto space since
              2012. And I’ve seen it grow and falter over a period of time.
              Really happy to be here!
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
            }}>
            <Image
              source={Logout}
              style={{height: 15, width: 15, paddingVertical: '2%'}}
            />
            <Text
              style={{
                paddingLeft: 10,
                color: '#727682',
                fontFamily: 'Montserrat-Regular',
                fontWeight: '600',
              }}>
              Logout
            </Text>
          </View>
          <View style={{paddingVertical: '3%'}}>
            <Image source={Star} style={{height: 30, width: 30}} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '80%',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              flex: 0.2,
            }}>
            <View style={{flex: 0.4}}>
              <Text
                style={{
                  fontFamily: 'Montserrat-Regular',
                  fontWeight: '600',
                  fontSize: 12,
                  lineHeight: 17,
                  color: '#727682',
                }}>
                Under or Over
              </Text>
              <View
                style={{
                  top: 15,
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  width: '70%',
                }}>
                <CustomIcon
                  name={'upArrow'}
                  style={{color: '#48C547', fontSize: 15, lineHeight: 22}}
                />
                <Text
                  style={{
                    fontFamily: 'Montserrat-semibold',
                    fontSize: 22,
                    lineHeight: 25,
                    color: 'black',
                  }}>
                  81%
                </Text>
              </View>
            </View>
            <View style={{flex: 0.4}}>
              <Text
                style={{
                  fontFamily: 'Montserrat-Regular',
                  fontWeight: '600',
                  fontSize: 12,
                  lineHeight: 17,
                  color: '#727682',
                }}>
                Top 5
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: '75%',
                  justifyContent: 'space-evenly',
                  top: 15,
                }}>
                <CustomIcon
                  name={'downArrow'}
                  style={{color: '#F73232', fontSize: 15, lineHeight: 22}}
                />
                <Text
                  style={{
                    fontFamily: 'Montserrat-semibold',
                    fontSize: 22,
                    lineHeight: 25,
                    color: 'black',
                  }}>
                  -51%
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1.5,
              top: '5%',
              alignItems: 'flex-end',
              justifyContent: 'space-evenly',
              height: config.height / 2.5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: config.width / 1.2,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  height: 50,
                  width: '50%',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'Montserrat-Regular',
                    color: '#727682',
                    fontWeight: '600',
                  }}>
                  Game played
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  height: 50,
                  width: '50%',
                  justifyContent: 'center',
                  borderBottomWidth: 3,
                  borderBottomColor: '#6231AD',
                }}>
                <Text
                  style={{
                    fontFamily: 'Montserrat-Regular',
                    fontWeight: '600',
                    color: '#6231AD',
                  }}>
                  Badges
                </Text>
              </View>
            </View>
            <View
              style={{
                alignItems: 'flex-end',
                width: '80%',
                top: '5%',
                justifyContent: 'flex-end',
              }}>
              <FlatList
                // bounces={false}
                persistentScrollbar={true}
                horizontal={false}
                keyExtractor={item => item.key}
                renderItem={({item}) => {
                  return (
                    <View
                      style={{width: '89%', height: 60, flexDirection: 'row'}}>
                      <Image
                        source={LocalImage}
                        style={{
                          height: 50,
                          width: 50,
                          justifyContent: 'flex-start',
                        }}
                      />
                      <View style={{flexDirection: 'column'}}>
                        <Text
                          style={{
                            fontSize: 14,
                            lineHeight: 17,
                            fontFamily: 'Montserrat-Regular',
                            fontWeight: '600',
                          }}>
                          {item.title}
                          {item?.ponit && (
                            <Text style={{color: '#FFA600'}}>
                              {item?.ponit}
                            </Text>
                          )}
                        </Text>
                        <Text
                          style={{
                            color: '#727682',
                            fontWeight: '500',
                            fontSize: 14,
                            lineHeight: 20,
                            width: '75%',
                            fontFamily: 'Montserrat-Regular',
                          }}>
                          {item.desc}
                        </Text>
                      </View>
                    </View>
                  );
                }}
                style={{
                  // flex: 1,
                  height: '100%',
                  top: 15,
                  // height: config.height / 1.2,
                  width: config.width / 1.3,
                }}
                contentContainerStyle={{
                  width: '89%',
                  height: 60,
                  flexDirection: 'column',
                }}
                data={data}
              />
            </View>
          </View>
        </View>
      </View>
    </ScreenLayout>
  );
};

export default Profile;
