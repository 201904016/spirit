/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';


const App = () => {
  return (
    <View>
      <View >
        <Text >
          Spiriataaasdasdadsadasdasdasdasdasd
        </Text>
      </View>
      <View>
      <Pressable>
      <Text>로그인1asd</Text>
        </Pressable>
    </View>
    <View>
    <Pressable style={styles.LoginButton}>
    <Text>로그인2</Text>
        </Pressable>
    </View>
    <View>
    <Pressable>
        <Text>로그인3</Text>
        </Pressable>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop:100,
    padding:100
  },
  LoginButton: {
    backgroundColor: '#B6BE6A',
    paddingHorizontal: 110,
    paddingVertical: 10,
    margin:20,
    alignItems:'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
