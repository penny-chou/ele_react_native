import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Carousel, Image} from '@ant-design/react-native';

export default class Home extends Component {
  /**
   * 页面渲染
   *
   * @returns
   * @memberof Home
   */
  render() {
    let pic = {
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
    };
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1}}>
        <Carousel
          style={styles.wrapper}
          selectedIndex={2}
          autoplay
          infinite
          afterChange={this.onHorizontalSelectedIndexChange}>
          <View style={[styles.containerHorizontal]}>
            <Image
              source={require('../../common/img/minute.png')}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{width: 100, height: 100}}>
              <Text>aaa</Text>
            </Image>
          </View>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={[styles.containerHorizontal, {backgroundColor: 'blue'}]}>
            <Text>Carousel 2</Text>
          </View>
          <View
            style={[styles.containerHorizontal, {backgroundColor: 'yellow'}]}>
            <Text>Carousel 3</Text>
          </View>
          <View style={[styles.containerHorizontal, {backgroundColor: 'aqua'}]}>
            <Text>Carousel 4</Text>
          </View>
          <View
            style={[styles.containerHorizontal, {backgroundColor: 'fuchsia'}]}>
            <Text>Carousel 5</Text>
          </View>
        </Carousel>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
  },
  containerHorizontal: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
});
