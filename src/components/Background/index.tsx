import React, {ReactNode} from 'react';
import LinearGradient from 'react-native-linear-gradient';

interface BackgroundProps {
  children: ReactNode;
}

const Background: React.FC<BackgroundProps> = ({children}) => {
  return (
    <LinearGradient style={{flex: 1}} colors={['#121015', '#1FAE25']}>
      {children}
    </LinearGradient>
  );
};

export default Background;
