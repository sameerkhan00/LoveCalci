import React, {Component} from 'react';
import {TextInput} from 'react-native';
import {ActivityIndicator} from 'react-native';
import {KeyboardAvoidingView} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {StatusBar} from 'react-native';
import {Text, View, Dimensions, Animated, Image} from 'react-native';

const {height, width} = Dimensions.get('screen');
const HELPERTEXT = {
  GreaterThen75: 'Love Is In The Air',

  GreaterThen60: 'No Problem Keep Trying Everything Will Be Fine',
  GreaterThen40: 'You Deserve Better',
  GreaterThen20: 'Every Hero Once Was A Villain',
};
export class Result extends Component {
  constructor() {
    super();
    this.state = {
      result: false,
      textMessage: '',
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({result: true}), 5000);
    const {result} = this.props.route.params;
    if (result > 75) {
      this.setState({textMessage: HELPERTEXT.GreaterThen75});
    } else if (result < 75 && result > 40) {
      this.setState({textMessage: HELPERTEXT.GreaterThen60});
    } else if (result < 40 && result > 20) {
      this.setState({textMessage: HELPERTEXT.GreaterThen40});
    } else {
      this.setState({textMessage: HELPERTEXT.GreaterThen20});
    }
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
        {!this.state.result ? (
          <View
            style={{
              height: height - height / 5 - 100,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ActivityIndicator size={50} color="red" />

            <Text
              style={{
                fontFamily: 'AkayaTelivigala-Regular',
                fontSize: height * 0.05,
                color: '#ffffff',
                textAlign: 'center',
                marginTop: '5%',
              }}>
              Hoping For The Best
            </Text>
          </View>
        ) : (
          <KeyboardAvoidingView
            style={{
              height: height - height / 5 - 100,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontFamily: 'AkayaTelivigala-Regular',
                fontSize: height * 0.11,
                color: '#ffffff',
                textAlign: 'center',
                marginTop: '5%',
              }}>
              {Math.round(this.props.route.params.result)}%
            </Text>

            <Text
              style={{
                fontFamily: 'AkayaTelivigala-Regular',
                fontSize: height * 0.05,
                color: '#ffffff',
                textAlign: 'center',
                marginTop: '5%',
              }}>
              {this.state.textMessage}
            </Text>

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
              onPress={() => this.props.navigation.navigate('Main')}>
              <Text
                style={{
                  fontSize: height * 0.03,
                  color: '#ffffff',
                  fontFamily: 'AkayaTelivigala-Regular',
                }}>
                Try Again
              </Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        )}
      </View>
    );
  }
}

export default Result;
