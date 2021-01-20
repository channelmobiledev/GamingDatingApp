import React from 'react';
import {Image, View} from 'react-native';
import {ListItem, Text} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {FAB} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreen = () => {
  /**
   * Render
   */
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <>
        <Image
          style={{
            flex: 1,
            alignSelf: 'stretch',
            width: '100%',
            height: 400,
          }}
          source={{
            uri: 'https://pbs.twimg.com/media/Er8y5cOXYAQGdrw?format=jpg',
          }}
          resizeMode="cover"
        />

        <View style={{padding: 20}}>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-end'}}>
            <Text h1>Brittany</Text>
            <Text h3>, 26</Text>
          </View>

          <View style={{paddingVertical: 10}}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'flex-end',
                padding: 2,
              }}>
              <MaterialCommunityIcons
                name="briefcase-outline"
                color={'#404040'}
                size={24}
              />
              <ListItem.Title>Social media creator</ListItem.Title>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'flex-end',
                padding: 2,
              }}>
              <MaterialCommunityIcons
                name="map-marker"
                color={'#404040'}
                size={26}
              />
              <ListItem.Title>Less than a mile away</ListItem.Title>
            </View>
          </View>

          <Text style={{fontSize: 16}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            euismod et sapien quis viverra. Donec porttitor ac lacus nec
            molestie. Donec dapibus consectetur dolor, nec hendrerit felis
            placerat nec. Etiam at urna id libero volutpat egestas eget
            consectetur eros. Cras molestie fringilla ligula vitae varius.
          </Text>

          <FAB
            style={{
              position: 'absolute',
              margin: 16,
              right: 0,
              bottom: 0,
            }}
            icon="pencil"
            onPress={() => console.log('Pressed')}
          />

          <FAB
            style={{
              position: 'absolute',
              margin: 16,
              right: 0,
              top: -45,
            }}
            icon="arrow-down-bold"
            onPress={() => console.log('Pressed')}
          />
        </View>
      </>
    </ScrollView>
  );
};

export default ProfileScreen;
