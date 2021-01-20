import React, {useState} from 'react';
import {View} from 'react-native';
import {Card, Text} from 'react-native-elements';
import SwipeCards from 'react-native-swipe-cards-deck';
import {SwipeCardDataModel} from '../models/SwipeCardDataModel';

interface Props {
  data: SwipeCardDataModel[];
  handleYup: () => void;
  handleNope: () => void;
  handleMaybe: () => void;
}

const MatchesScreen = (props: Props) => {
  const [matchesCards, setMatchesCards] = useState<[]>([]);

  const CardSwipeItem = ({item}: SwipeCardDataModel) => {
    return (
      <View style={{flex: 1}}>
        <Card
          containerStyle={{
            elevation: 5,
            borderRadius: 5,
            padding: 0,
          }}>
          <Card.Image
            style={{
              alignSelf: 'stretch',
              width: 300,
              height: 400,
            }}
            source={{
              uri: item.avatar,
            }}
          />
          <View style={{padding: 10}}>
            <Text>
              {item.name}, {item.age}
            </Text>
          </View>
        </Card>
      </View>
    );
  };

  const NoMoreCardsView = () => {
    return (
      <>
        <Text>No more cards :0</Text>
      </>
    );
  };

  /**
   * Render
   */
  return (
    <View style={{flex: 1}}>
      <SwipeCards
        cards={props.data}
        renderCard={(cardData: SwipeCardDataModel) => (
          <CardSwipeItem item={cardData} />
        )}
        keyExtractor={(cardData: SwipeCardDataModel) => String(cardData.id)}
        renderNoMoreCards={NoMoreCardsView}
        handleYup={props.handleYup}
        handleNope={props.handleNope}
        handleMaybe={props.handleMaybe}
        hasMaybeAction
      />
    </View>
  );
};

export default MatchesScreen;
