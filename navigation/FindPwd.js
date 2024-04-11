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

const FindPwd = () => {

  return (

    <View style={styles.container}>
      <View style={styles.topBox}>
        <Image
          source={require('././assets/leftLine.png')}
          style={styles.icon}
        />
        <Text style={styles.topBold}>비밀번호 찾기</Text>
      </View>

      <View style={styles.midBox}>

        <View style={{ marginBottom: 40 }}>
          <Text style={styles.linkBold}>스피릿과 함께한 휴대폰 번호를 입력해주세요.</Text>

          <View style={{ flexDirection: 'row' }}>
            <TextInput
              style={styles.inputPh}
              placeholder="숫자만 입력해주세요."
            />

            <Pressable style={styles.mBtn1}>
              <Text style={{ color: 'gray', fontWeight: '600' }}>인증번호 요청</Text>
            </Pressable>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <TextInput
              style={styles.inputPh}
              placeholder="인증번호를 입력해주세요."
            />

            <Pressable style={styles.mBtn2}>
              <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>인증번호 확인</Text>
            </Pressable>
          </View>

        </View>

        <View style={{ marginBottom: 20 }}>
          <Text style={styles.linkBold}>새 비밀번호</Text>
          <TextInput
            style={styles.input}
            placeholder="새로운 비밀번호를 입력해주세요."
          />
          <TextInput
            style={styles.input}
            placeholder="비밀번호를 다시한번 입력해주세요."
          />
          <Text style={styles.linkBk}>영문, 숫자, 특수문자 중 2종류 이상을 조합하여 8~20자리로 설정해 주세요.</Text>
        </View>

      </View>

      <View style={styles.btBox}>
        <View>
          <Pressable style={styles.pwBtn1}>
            <Text Text style={{ color: 'gray', fontWeight: '600' }}>비밀번호 변경</Text>
          </Pressable>
        </View>
        <View>
          <Pressable style={styles.pwBtn2}>
            <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>비밀번호 변경</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 18,
    height: 18,
    marginTop: 4
  },
  linkBk: {
    color: 'gray',
    textAlign: 'left',
    fontSize: 10,
    fontWeight: '200',
    paddingLeft: 50,
    paddingRight: 50,
    paddingBottom: 30
  },
  linkBold: {
    textAlign: 'left',
    fontWeight: '700',
    paddingLeft: 40,
    paddingRight: 50,
    paddingBottom: 16
  },
  topBold: {
    textAlign: 'left',
    fontWeight: '600',
    paddingTop: 2,
    paddingLeft: 10,
    fontSize: 17,
    color: '#000000'
  },
  inputPh: {
    marginLeft: 40,
    marginRight: 10,
    marginBottom: 10,
    height: 40,
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
    paddingHorizontal: 10,
    width: 200
  },
  input: {
    marginLeft: 40,
    marginRight: 50,
    marginBottom: 10,
    height: 40,
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
    paddingHorizontal: 10
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  topBox: {
    height: 100,
    paddingTop: 30,
    paddingBottom: 10,
    paddingLeft: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row'
  },
  midBox:{
    height: 560,
    paddingTop:10
  },
  btBox:{
    height: 100,
    paddingTop:10
  },
  mBtn1: {
    backgroundColor: '#E2E2E2',
    paddingVertical: 10,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    width: 110,
    height: 40,
    lineHeight: 40
  },
  mBtn2: {
    backgroundColor: '#80D2F4',
    fontWeight: '500',
    paddingVertical: 10,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    width: 110,
    height: 40,
    lineHeight: 40
  },
  pwBtn1: {
    backgroundColor: '#E2E2E2',
    fontWeight: '500',
    paddingHorizontal: 110,
    paddingVertical: 10,
    marginLeft: 50,
    marginRight: 50,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10
  },
  pwBtn2: {
    backgroundColor: '#80D2F4',
    fontWeight: '500',
    paddingHorizontal: 110,
    paddingVertical: 10,
    marginLeft: 50,
    marginRight: 50,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10
  }
});


export default FindPwd;
