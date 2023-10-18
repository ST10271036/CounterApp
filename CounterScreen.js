import React from 'react';
import { View, Button, Text, AsyncStorage } from 'react-native';

const CounterScreen = ({ navigation }) => {
  const [count, setCount] = React.useState(0);

  const incrementCount = () => {
    const newCount = count + 1;
    AsyncStorage.setItem('count', newCount.toString());
    setCount(newCount);
  };

  return (
    <View>
      <Text>Counter Screen</Text>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={incrementCount} />
      <Button title="Display Counter" onPress={() => navigation.navigate('DisplayCounterScreen')} />
    </View>
  );
};

export default CounterScreen;
