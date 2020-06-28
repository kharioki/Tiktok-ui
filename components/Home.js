import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';

import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

const {width, height} = Dimensions.get('window');

const VideoData = props => {
  return (
    <View>
      <Video source={props.item.video} repeat style={styles.video} />
    </View>
  );
};

export default Home = () => {
  let data = [
    {
      id: '1',
      title: 'AppDevBlog',
      video: require('../assets/sample.mp4'),
      img: require('../assets/p1.jpg'),
      description:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
    },
    {
      id: '2',
      title: 'AppDevBlog',
      video: require('../assets/sample.mp4'),
      img: require('../assets/p1.jpg'),
      description:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
    },
    {
      id: '3',
      title: 'AppDevBlog',
      video: require('../assets/sample.mp4'),
      img: require('../assets/p1.jpg'),
      description:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
    },
    {
      id: '4',
      title: 'AppDevBlog',
      video: require('../assets/sample.mp4'),
      img: require('../assets/p1.jpg'),
      description:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
    },
    {
      id: '5',
      title: 'AppDevBlog',
      video: require('../assets/sample.mp4'),
      img: require('../assets/p1.jpg'),
      description:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
    },
  ];

  return (
    <View style={{height: height}}>
      <FlatList
        data={data}
        pagingEnabled={true}
        renderItem={({item, index}) => <VideoData item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    height: height,
    width: width,
    backgroundColor: '#000',
  },
});
