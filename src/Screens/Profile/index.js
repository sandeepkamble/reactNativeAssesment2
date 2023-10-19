import { View, Text, Image, useWindowDimensions, StyleSheet } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import ScreenLayout from '../../ScreenLayout';
import EditImage from '../../assets/images/editProfile.png';
import LocalImage from '../../assets/images/localImage.png';
import Star from '../../assets/images/star.png';
import Logout from '../../assets/images/logout.png';
import CustomIcon from '../../CustomComponents/CustomIcon';
import headerFaceIcon from '../../assets/images/headerFaceIcon.png'
import downloadIcon from '../../assets/images/downloadIcon.png';
import uploadIcon from '../../assets/images/uploadIcon.png'
import profileImage from '../../assets/images/profileImage.png'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';


const Profile = ({ config }) => {
  const [index, setIndex] = React.useState(0);
  const layout = useWindowDimensions()
  const decriptionText = "I'm a software developer that has been in the crypto space since 2012. And I’ve seen it grow and falter over a period of time. Really happy to be here!"
  const [routes] = React.useState([
    { key: 'first', title: 'Games Played' },
    { key: 'second', title: 'Badges' },
  ]);
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

  const FirstRoute = () => (
    <View style={{ flex: 1, }} >
      <Text>No Games Played</Text>
    </View>
  );
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      style={{ backgroundColor: 'white', }}
      labelStyle={{ color: 'black' }}
      activeColor="#6231AD"
      indicatorStyle={{ backgroundColor: '#6231AD' }}

    />
  );
  const SecondRoute = () => (

    <View style={{ flex: 1, }} >
      <FlatList
        style={{ backgroundColor: '#EDF8FB' }}
        contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: 10 }}
        data={data}
        renderItem={({ item }) => {
          return (
            <View
              style={{ flexDirection: 'row', padding: 20, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', marginHorizontal: 20, marginTop: 15 }}>
              <Image
                source={LocalImage}
                style={{
                  height: 50,
                  width: 50,
                }}
              />
              <View style={{ flexDirection: 'column', marginEnd: 40, marginStart: 16 }}>
                <Text
                  style={{
                    fontSize: 14,
                    lineHeight: 17,
                    fontFamily: 'Montserrat-Bold',
                    fontWeight: '600',
                  }}>
                  {item.title}
                  {item?.ponit && (
                    <Text style={{ color: '#FFA600' }}>
                      {item?.ponit}
                    </Text>
                  )}
                </Text>
                <Text
                  style={{
                    color: '#727682',
                    fontWeight: '500',
                    fontSize: 14,
                    marginTop: 8,
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  {item.desc}
                </Text>
              </View>
            </View>
          );
        }} />
    </View>
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <ScreenLayout title={'Profile'} config={config} header={'ScoreCart'}>
      <View style={{ height: '100%', width: '100%' }}>

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
            <Image source={profileImage} />
            <View
              style={styles.editImageStyle}>
              <Image source={EditImage} style={{ width: 15, height: 15 }} />
            </View>
          </View>

          <Text
            style={styles.profileUserNameTextStyle}>
            Jina Simons
          </Text>
          <Text
            style={styles.pointsTextStyle}>
            6000 pts
          </Text>
          <Text
            style={styles.profileDescriptionTextStyle}>
            {decriptionText}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            justifyContent: 'center'
          }}>
          <Image
            source={Logout}
            style={{ height: 15, width: 15, paddingVertical: '2%' }}
          />
          <Text
            style={styles.logoutTextStyle}>
            Logout
          </Text>
        </View>
        <View style={{ marginTop: 20, borderRadius: 8, borderColor: 'lightgray', borderWidth: 1, marginHorizontal: 20 }}>
          <View style={{ position: 'absolute', left: '50%', top: 0, marginLeft: -15, marginTop: -15 }}>
            <Image source={Star} style={{ height: 30, width: 30 }} />
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 20, }}>
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ fontWeight: '600', fontSize: 14, color: "#727682" }}>Under or Over</Text>
              <View style={{ flexDirection: 'row', marginTop: 14 }}>
                <Image source={uploadIcon} style={{ height: 30, width: 30, }} />
                <Text style={{ fontWeight: '700', fontSize: 24, color: '#4F4F4F', marginStart: 12 }}>81%</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ fontWeight: '600', fontSize: 14, color: "#727682" }}>Top 5</Text>
              <View style={{ flexDirection: 'row', marginTop: 14 }}>
                <Image source={downloadIcon} style={{ height: 30, width: 30 }} />
                <Text style={{ fontWeight: '700', fontSize: 24, color: '#4F4F4F', marginStart: 12 }}>-51%</Text>
              </View>
            </View>

          </View>
        </View>

        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={renderTabBar}
        />


      </View>
    </ScreenLayout>

  );

};
const styles = StyleSheet.create({
  editImageStyle: {

    height: 20,
    width: 20,
    borderRadius: 50,
    backgroundColor: 'white',
    position: 'absolute',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',

  },
  profileUserNameTextStyle: {

    marginVertical: 10,
    fontWeight: '500', fontSize: 14,
    color: '#333333',
    fontFamily: 'Montserrat-Bold',

  },
  pointsTextStyle: {

    fontFamily: 'Montserrat-Medium',
    color: '#727682',
    fontWeight: '500', fontSize: 14,
    color: '#333333',
    marginBottom: 2,

  },
  profileDescriptionTextStyle: {

    fontFamily: 'Montserrat-Medium',
    textAlign: 'justify',
    paddingHorizontal: 20,
    color: '#727682',
    fontSize: 14,
    fontWeight: '500'

  },
  logoutTextStyle: {

    paddingLeft: 10,
    color: '#727682',
    fontFamily: 'Montserrat-Medium',
    fontWeight: '500',
    fontSize: 14

  }
})

export default Profile;
