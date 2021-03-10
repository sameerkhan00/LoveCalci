import React, {Component} from 'react';
import {TextInput} from 'react-native';
import {KeyboardAvoidingView} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {StatusBar} from 'react-native';
import {Text, View, Dimensions, Animated, Image} from 'react-native';

const {height, width} = Dimensions.get('screen');
export class Home extends Component {
  constructor() {
    super();
    this.state = {
      input1: '',
      input2: '',
      screensMale: true,
    };
  }

  componentDidMount() {}
  handleMaleInput() {
    if (this.state.input1 === '') {
      alert('Please Enter The name');
      return;
    }
    this.setState({screensMale: false});
  }
  handleFemaleInput() {
    if (this.state.input2 === '') {
      alert('Please Enter The name');
      return;
    }
    this.props.navigation.navigate('Result', {
      name1: this.state.input1,
      name2: this.state.input2,
      result: Math.random() * (100 - 1) + 1,
    });
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'rgba(255,0,0,0.7)'}}>
        <StatusBar color="tomato" />
        <View
          style={{
            height: height / 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'AkayaTelivigala-Regular',
              fontSize: height * 0.1,
              color: '#ffffff',
            }}>
            LOVECALCI
          </Text>
        </View>
        {this.state.screensMale ? (
          <KeyboardAvoidingView
            style={{
              height: height - height / 5 - 100,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TextInput
              placeholder="Enter Male Name Here"
              style={{
                backgroundColor: '#fff',
                width: width / 1.2,
                borderRadius: 10,
                fontFamily: 'AkayaTelivigala-Regular',
                fontSize: height * 0.026,
                height: height * 0.08,
                paddingLeft: 10,
              }}
              value={this.state.input1}
              onChangeText={(txt) => this.setState({input1: txt})}
            />
            <Image
              source={{
                uri:
                  'https://cdn3.iconfinder.com/data/icons/many-peoples-vol-2/512/16-512.png',
              }}
              style={{
                height: height * 0.3,
                width: height * 0.3,
                borderRadius: (height * 0.3) / 2,
              }}
              resizeMode="cover"
            />

            <TouchableOpacity
              style={{
                alignSelf: 'center',
                width: width / 1.5,
                borderRadius: 40,
                backgroundColor: 'red',
                height: 60,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '5%',
              }}
              onPress={() => this.handleMaleInput()}>
              <Text
                style={{
                  fontSize: height * 0.03,
                  color: '#ffffff',
                  fontFamily: 'AkayaTelivigala-Regular',
                }}>
                Proceed
              </Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        ) : (
          <KeyboardAvoidingView
            style={{
              height: height - height / 5 - 100,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TextInput
              placeholder="Enter Female Name Here"
              style={{
                backgroundColor: '#fff',
                width: width / 1.2,
                borderRadius: 10,
                fontFamily: 'AkayaTelivigala-Regular',
                fontSize: height * 0.026,
                height: height * 0.08,
                paddingLeft: 10,
              }}
              value={this.state.input2}
              onChangeText={(txt) => this.setState({input2: txt})}
            />
            <Image
              source={{
                uri:
                  'https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/60-512.png',
              }}
              style={{
                height: height * 0.3,
                width: height * 0.3,
                borderRadius: (height * 0.3) / 2,
              }}
              resizeMode="cover"
            />

            <TouchableOpacity
              style={{
                alignSelf: 'center',
                width: width / 1.5,
                borderRadius: 40,
                backgroundColor: 'red',
                height: 60,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '5%',
              }}
              onPress={() => this.handleFemaleInput()}>
              <Text
                style={{
                  fontSize: height * 0.03,
                  color: '#ffffff',
                  fontFamily: 'AkayaTelivigala-Regular',
                }}>
                Check now
              </Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        )}
      </View>
    );
  }
}

export default Home;
