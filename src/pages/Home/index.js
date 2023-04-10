import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Carousel from 'react-native-snap-carousel';

const { width } = Dimensions.get('window');

const imageList = [
  { id: 1, source: require('../../assets/post.jpg') },
  { id: 2, source: require('../../assets/post.jpg') },
  { id: 3, source: require('../../assets/post2.jpg') },
  { id: 4, source: require('../../assets/post2.jpg') },
  { id: 5, source: require('../../assets/post.jpg') },
  { id: 6, source: require('../../assets/post2.jpg') },
  { id: 7, source: require('../../assets/post.jpg') },
];

const FeedImage = ({ source }) => {
  const { height, width } = Image.resolveAssetSource(source);

  const aspectRatio = width / height;

  return (
    <View>
      <Animatable.Image 
        animation="fadeIn"
        source={source}
        style={{ width: '100%', height: width / aspectRatio }}
        resizeMode="cover"
      />
    </View>
  );
};

const FeedImageList = () => {
  const renderItem = ({ item }) => {
    return (
      <FeedImage source={item.source} />
    );
  };

  return (
    <View>
      <Carousel
        data={imageList}
        renderItem={renderItem}
        sliderHeight={Dimensions.get('window').height}
        itemHeight={Dimensions.get('window').height}
        vertical={true}
        inverted={true}
      />
    </View>
  );
};

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'black'}}>
      <FeedImageList />
    </View>
  );
};

export default App;