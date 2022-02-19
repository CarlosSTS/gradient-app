import React from 'react';
import {View, Text} from 'react-native';

import Background from '../../components/Background';
import styles from './styles';

const Home: React.FC = () => {
  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>Hello react-native-linear-gradient</Text>
      </View>
    </Background>
  );
};

export default Home;
