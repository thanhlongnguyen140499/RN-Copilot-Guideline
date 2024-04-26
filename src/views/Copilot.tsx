import {View, Button, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CopilotStep, useCopilot, walkthroughable} from 'react-native-copilot';
import AppText from '../components/AppText';
import AppImage from '../components/AppImage';

const Copilot = () => {
  const CopilotText = walkthroughable(Text);
  const CopilotView = walkthroughable(View);

  const [isRunning, setIsRunning] = useState<boolean>(false);

  const {start} = useCopilot();

  useEffect(() => {
    if (!isRunning) {
      const timer = setTimeout(async () => {
        console.log('here');

        setIsRunning(true);
        await start();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [start, isRunning]);

  return (
    <View>
      <CopilotStep
        text="This is a hello world example!"
        order={1}
        name="hello1">
        <CopilotText>Hello 1</CopilotText>
      </CopilotStep>

      <CopilotStep
        text="This is a hello world example!"
        order={2}
        name="hello2">
        <CopilotText>Hello 1</CopilotText>
      </CopilotStep>

      <CopilotStep
        text="This is a hello world example!"
        order={3}
        name="hello3">
        <CopilotText>Hello 1</CopilotText>
      </CopilotStep>
      <CopilotStep
        text="This is a hello world example!"
        order={4}
        name="hello4">
        <CopilotView>
          <AppText>Hello 4</AppText>
        </CopilotView>
      </CopilotStep>

      <CopilotStep
        text="This is a hello world example!"
        order={5}
        name="hello5">
        <CopilotView style={{flex: 1}}>
          <AppImage />
        </CopilotView>
      </CopilotStep>

      <Button title="Start tutorial" onPress={() => start()} />
    </View>
  );
};

export default Copilot;
