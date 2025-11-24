import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GameCard } from './src/components/GameCard';

export default function App() {

  const cardOnPress = (routerRouter) => {
    alert(`${routerRouter}`)
  };

  return (
    <View>
      <GameCard title="game1" imageUrl="#" onPress={() => cardOnPress('Game1')}/>
      <GameCard title="game2" imageUrl="#" onPress={() => cardOnPress('Game2')}/>
    </View>
  );
}

