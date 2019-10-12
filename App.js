/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  // SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  // StatusBar,
} from 'react-native';
import {Flex, Icon} from '@ant-design/react-native';
import Home from './src/components/Home/Home';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

export default class HelloWorldApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu_active: '1',
    };
  }

  /**
   * 更改菜单
   *
   * @memberof HelloWorldApp
   */
  onChangeMenu = record => {
    this.setState({
      menu_active: record.id,
    });
  };

  /**
   * 页面渲染
   *
   * @returns
   * @memberof HelloWorldApp
   */
  render() {
    const menuList = [
      {
        id: '1',
        name: 'home',
        text: '首页',
      },
      {
        id: '2',
        name: 'file-text',
        text: '订单',
      },
      {
        id: '3',
        name: 'user',
        text: '我的',
      },
    ];

    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={styles.root_app}>
        <View style={styles.root_header}>
          <TextInput
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              marginLeft: '10%',
              marginTop: 12,
              height: 40,
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 20,
              backgroundColor: '#fff',
              width: '80%',
              textAlign: 'center',
            }}
            placeholder="Type here to search!"
            onChangeText={text => this.setState({text})}
            value={this.state.text}
          />
          <Icon
            name={'search'}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              textAlign: 'right',
              position: 'absolute',
              right: '12%',
              top: 20,
            }}
          />
        </View>
        <ScrollView style={styles.root_content}>
          <Home />
        </ScrollView>
        <View style={styles.root_footer}>
          <Flex style={styles.flex}>
            {menuList.map(item => {
              const active_style =
                this.state.menu_active && this.state.menu_active !== item.id
                  ? styles.color_gray
                  : styles.roo_menu_active;
              const active_color =
                this.state.menu_active && this.state.menu_active !== item.id
                  ? '#ccc'
                  : '#1890ff';
              return (
                <Flex.Item
                  key={item.id}
                  onPress={this.onChangeMenu.bind(this, item)}>
                  <View>
                    <Icon
                      color={active_color}
                      name={item.name}
                      style={{textAlign: 'center'}}
                    />
                    <Text
                      style={[
                        styles.text_align_center,
                        styles.font_size_12,
                        active_style,
                      ]}>
                      {item.text}
                    </Text>
                  </View>
                </Flex.Item>
              );
            })}
          </Flex>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root_app: {
    height: '100%',
  },
  root_header: {
    height: 64,
    backgroundColor: '#1890ff',
  },
  root_content: {
    flex: 1,
  },
  root_footer: {
    width: '100%',
    height: 64,
    backgroundColor: '#fff',
  },
  padding_4: {
    paddingLeft: 4,
    paddingRight: 4,
  },
  flex: {
    height: '100%',
    textAlign: 'center',
  },
  text_align_center: {
    textAlign: 'center',
  },
  color_gray: {
    color: '#ccc',
  },
  font_size_12: {
    fontSize: 12,
  },
  roo_menu_active: {
    color: '#1890ff',
  },
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
// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>HELLO</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;
