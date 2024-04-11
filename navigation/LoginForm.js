import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  TextInput,
} from 'react-native';

const LoginForm = () => {

  return (

    <View style={styles.container}>
      <View style={styles.box1}>
        <Image
          source={require('././assets/spiritLogo.png')}
          style={styles.imageStyle}
        />
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="전화번호"
        />
        <TextInput
          style={styles.input}
          placeholder="비밀번호"
        />
      </View>
      <View style={styles.linksContainer}>
        <Text style={styles.link}>회원가입</Text>
        <Text style={styles.separator}>| </Text>
        <Text style={styles.link}>비밀번호 찾기</Text>
      </View>
      <View>
        <Pressable style={styles.LoginButton}>
          <Text>로그인</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  linksContainer: {
    marginTop: 30,
    flexDirection: 'row', // 수평 방향으로 요소들을 배치
    alignItems: 'center',
    justifyContent: 'center'
  },
  link: {
    textAlign: 'center',
    paddingLeft: 50,
    paddingRight: 50
  },
  separator: {
    paddingVertical: 10
  },
  input: {
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 20,
    height: 40,
    borderColor: '#ced4da',
    borderBottomWidth: 1,
    paddingHorizontal: 10
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  box1: {
    height: 330,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  LoginButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#80D2F4',
    paddingHorizontal: 110,
    paddingVertical: 10,
    margin: 50,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10
  },
  imageStyle: {
    width: 130,
    resizeMode: 'contain'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400'
  },
  highlight: {
    fontWeight: '700'
  },
});


export default LoginForm;
