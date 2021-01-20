import React from 'react';
import {View} from 'react-native';
import {Avatar, ListItem, Text} from 'react-native-elements';
import {FlatList} from 'react-native-gesture-handler';
import {MessageSummaryModel} from '../models/MessageSummaryModel';
import {NewMatchesSummaryModel} from '../models/NewMatchesSummaryModel';

interface Props {
  newMatchesList: NewMatchesSummaryModel[];
  messageList: MessageSummaryModel[];
}

const MessagesScreen = (props: Props) => {
  const newMatchesListItem = ({item}: any) => {
    /**
     * Render New Matches Item
     */
    return (
      <>
        <View style={{padding: 10, flex: 1, alignItems: 'center'}}>
          <Avatar
            rounded
            size={'large'}
            source={{
              uri: item.avatar,
            }}
          />
          <ListItem.Title>{item.username}</ListItem.Title>
        </View>
      </>
    );
  };

  const messageListItem = ({item}: any) => {
    /**
     * Render Message List Item
     */
    return (
      <>
        <ListItem bottomDivider containerStyle={{backgroundColor: '#00000000'}}>
          <Avatar
            rounded
            size={'large'}
            source={{
              uri: item.avatar,
            }}
          />
          <ListItem.Content>
            <ListItem.Title>{item.username}</ListItem.Title>
            <ListItem.Subtitle>{item.summary}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </>
    );
  };

  /**
   * Render
   */
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0}}>
        <Text style={{padding: 5, textTransform: 'uppercase'}}>
          New Matches
        </Text>
        <FlatList
          horizontal
          keyExtractor={(_, index) => index.toString()}
          data={props.newMatchesList}
          renderItem={newMatchesListItem}
        />
      </View>
      <View style={{flex: 1}}>
        <Text style={{padding: 5, textTransform: 'uppercase'}}>Messages</Text>
        <FlatList<MessageSummaryModel>
          keyExtractor={(_, index) => index.toString()}
          data={props.messageList}
          renderItem={messageListItem}
        />
      </View>
    </View>
  );
};

export default MessagesScreen;
