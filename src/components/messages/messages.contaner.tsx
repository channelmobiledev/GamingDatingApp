import React, {useState} from 'react';
import {MessageSummaryModel} from '../models/MessageSummaryModel';
import {NewMatchesSummaryModel} from '../models/NewMatchesSummaryModel';
import MessagesScreen from './messages.screen';

const MessagesContainer = () => {
  /**
   * States
   */
  const [messageList, setMessageList] = useState<MessageSummaryModel[]>([
    {
      id: 0,
      avatar: 'https://source.unsplash.com/random/500x500',
      username: 'Stella',
      summary: 'Lotem ipsun something something message and all ...',
    },
    {
      id: 0,
      avatar: 'https://source.unsplash.com/random/500x500',
      username: 'Stella',
      summary: 'Lotem ipsun something something message and all ...',
    },
    {
      id: 0,
      avatar: 'https://source.unsplash.com/random/500x500',
      username: 'Stella',
      summary: 'Lotem ipsun something something message and all ...',
    },
    {
      id: 0,
      avatar: 'https://source.unsplash.com/random/500x500',
      username: 'Stella',
      summary: 'Lotem ipsun something something message and all ...',
    },
    {
      id: 0,
      avatar: 'https://source.unsplash.com/random/500x500',
      username: 'Stella',
      summary: 'Lotem ipsun something something message and all ...',
    },
    {
      id: 0,
      avatar: 'https://source.unsplash.com/random/500x500',
      username: 'Stella',
      summary: 'Lotem ipsun something something message and all ...',
    },
    {
      id: 0,
      avatar: 'https://source.unsplash.com/random/500x500',
      username: 'Stella',
      summary: 'Lotem ipsun something something message and all ...',
    },
    {
      id: 0,
      avatar: 'https://source.unsplash.com/random/500x500',
      username: 'Stella',
      summary: 'Lotem ipsun something something message and all ...',
    },
    {
      id: 0,
      avatar: 'https://source.unsplash.com/random/500x500',
      username: 'Stella',
      summary: 'Lotem ipsun something something message and all ...',
    },
    {
      id: 0,
      avatar: 'https://source.unsplash.com/random/500x500',
      username: 'Stella',
      summary: 'Lotem ipsun something something message and all ...',
    },
    {
      id: 0,
      avatar: 'https://source.unsplash.com/random/500x500',
      username: 'Stella',
      summary: 'Lotem ipsun something something message and all ...',
    },
    {
      id: 0,
      avatar: 'https://source.unsplash.com/random/500x500',
      username: 'Stella',
      summary: 'Lotem ipsun something something message and all ...',
    },
    {
      id: 0,
      avatar: 'https://source.unsplash.com/random/500x500',
      username: 'Stella',
      summary: 'Lotem ipsun something something message and all ...',
    },
  ]);
  const [newMatchesList, setNewMatchesList] = useState<
    NewMatchesSummaryModel[]
  >([
    {
      id: 0,
      avatar: 'https://source.unsplash.com/random/500x500',
      username: 'Stella',
    },
    {
      id: 0,
      avatar: 'https://source.unsplash.com/random/500x500',
      username: 'Stella',
    },
    {
      id: 0,
      avatar: 'https://source.unsplash.com/random/500x500',
      username: 'Stella',
    },
    {
      id: 0,
      avatar: 'https://source.unsplash.com/random/500x500',
      username: 'Stella',
    },
    {
      id: 0,
      avatar: 'https://source.unsplash.com/random/500x500',
      username: 'Stella',
    },
    {
      id: 0,
      avatar: 'https://source.unsplash.com/random/500x500',
      username: 'Stella',
    },
    {
      id: 0,
      avatar: 'https://source.unsplash.com/random/500x500',
      username: 'Stella',
    },
    {
      id: 0,
      avatar: 'https://source.unsplash.com/random/500x500',
      username: 'Stella',
    },
  ]);

  /**
   * Render
   */
  return (
    <MessagesScreen newMatchesList={newMatchesList} messageList={messageList} />
  );
};

export default MessagesContainer;
