import React, { useState, useEffect } from 'react';
import { View, Text, AsyncStorage } from 'react-native';

const DisplayCounterScreen = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getCount = async () => {
      const savedCount = await AsyncStorage.getItem('count');
      if (savedCount) {
        setCount(parseInt(savedCount));
      }
    };
    getCount();
  }, []);

  return (
    <View>
      <Text>Display Counter Screen</Text>
      <Text>Saved Count: {count}</Text>
    </View>
  );
};

export default DisplayCounterScreen;
