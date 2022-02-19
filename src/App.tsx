import React from 'react';
import {StatusBar} from 'react-native';
import Home from './Pages/Home';

const App: React.FC = () => {
  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle={'light-content'}
      />
      <Home />
    </>
  );
};

export default App;
