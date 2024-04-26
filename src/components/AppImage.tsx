import {View, Image} from 'react-native';
import React from 'react';

const AppImage = () => {
  return (
    <View style={{width: 100, height: 100}}>
      <Image
        style={{width: 100, height: 100}}
        source={{
          uri: 'https://blog.hubspot.com/hs-fs/hubfs/image8-2.jpg?width=600&name=image8-2.jpg',
        }}
      />
    </View>
  );
};

export default AppImage;
