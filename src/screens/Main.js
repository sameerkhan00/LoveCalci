import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {StatusBar} from 'react-native';
import {Text, View, Dimensions, Animated, Image} from 'react-native';

const {height, width} = Dimensions.get('screen');
export class Main extends Component {
  constructor() {
    super();
    this.state = {
      HEIGHT1: new Animated.Value(height / 4),
      HEIGHT2: new Animated.Value(height - height / 4),
    };
  }

  TimingFunc() {
    Animated.parallel([
      Animated.timing(this.state.HEIGHT1, {
        toValue: height - height / 4,
        duration: 3000,
      }),
      Animated.timing(this.state.HEIGHT2, {
        toValue: height / 4,
        duration: 3000,
      }),
    ]).start();
  }
  componentDidMount() {
    this.TimingFunc();
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar color="tomato" />
        <Animated.View
          style={{
            height: this.state.HEIGHT2,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'AkayaTelivigala-Regular',
              fontSize: height * 0.1,
              color: '#ff4a36',
            }}>
            LOVECALCI
          </Text>
        </Animated.View>
        <Animated.View
          style={{
            height: this.state.HEIGHT1,
            backgroundColor: 'rgba(255,0,0,0.7)',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '90%',
              alignSelf: 'center',
              height: '70%',
            }}>
            <Image
              source={require('../Love.png')}
              style={{maxHeight: 170, maxWidth: 170}}
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
              onPress={() => this.props.navigation.navigate('Home')}>
              <Text
                style={{
                  fontSize: height * 0.03,
                  color: '#ffffff',
                  fontFamily: 'AkayaTelivigala-Regular',
                }}>
                Calculate Now
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    );
  }
}

export default Main;
