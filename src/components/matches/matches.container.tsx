import React, {useState} from 'react';
import {SwipeCardDataModel} from '../models/SwipeCardDataModel';
import MatchesScreen from './matches.screen';

/**
 * Matches Container
 */
const MatchesContainer = () => {
  /**
   * State
   */
  const [matchesList, setMatchesList] = useState<SwipeCardDataModel[]>([
    {
      id: 0,
      avatar: 'https://pbs.twimg.com/media/Er8y5cOXYAQGdrw?format=jpg',
      name: 'Brittany',
      age: 26,
    },
    {
      id: 1,
      avatar:
        'https://images.unsplash.com/photo-1589351189946-b8eb5e170ba6?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      name: 'Tatiana',
      age: 27,
    },
    {
      id: 2,
      avatar:
        'https://images.unsplash.com/photo-1589233562141-d2b5ffcf46d3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60',
      name: 'Roberta',
      age: 28,
    },
    {
      id: 3,
      avatar:
        'https://images.unsplash.com/photo-1574257855487-d9ed161156af?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80',
      name: 'Sofia',
      age: 29,
    },
    {
      id: 4,
      avatar:
        'https://images.unsplash.com/photo-1568184602824-55092fcb6497?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80',
      name: 'Morgan',
      age: 30,
    },
  ]);

  /**
   * Handles swipe yup
   */
  const handleYup = () => {
    return true;
  };

  /**
   * Handles swipe nope
   */
  const handleNope = () => {
    return true;
  };

  /**
   * Handles swipe maybe
   */
  const handleMaybe = () => {
    return true;
  };

  /**
   * Render
   */
  return (
    <MatchesScreen
      data={matchesList}
      handleYup={() => handleYup}
      handleNope={() => handleNope}
      handleMaybe={() => handleMaybe}
    />
  );
};

export default MatchesContainer;
