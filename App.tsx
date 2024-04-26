/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, useColorScheme} from 'react-native';
import {CopilotProvider} from 'react-native-copilot';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import Copilot from './src/views/Copilot';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <CopilotProvider>
      <SafeAreaView style={backgroundStyle}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <Header />
          <Copilot />
        </ScrollView>
      </SafeAreaView>
    </CopilotProvider>
  );
}

export default App;
