import React from 'react';
import {
  StyleProp,
  ViewStyle,
  Animated,
  StyleSheet,
  Platform,
  ScrollView,
  View,
  Text,
  SafeAreaView,
  I18nManager,
  Dimensions,
} from 'react-native';
import {AnimatedFAB} from 'react-native-paper';

const {width, height} = Dimensions.get('window');
const array = [
  {
    id: 1,
    name: 'John smith',
    description:
      'An animated, extending horizontally floating action button represents the primary action in an application',
  },
  {
    id: 2,
    name: 'Tommy-Lee',
    description:
      'An animated, extending horizontally floating action button represents the primary action in an application',
  },
  {
    id: 3,
    name: 'Oliver-James',
    description:
      'An animated, extending horizontally floating action button represents the primary action in an application',
  },
  ,
  {
    id: 4,
    name: 'Amelia-Rose',
    description:
      'An animated, extending horizontally floating action button represents the primary action in an application',
  },
  ,
  {
    id: 5,
    name: 'Ella-Mae',
    description:
      'An animated, extending horizontally floating action button represents the primary action in an application',
  },
  {
    id: 6,
    name: 'Ava-Grace',
    description:
      'An animated, extending horizontally floating action button represents the primary action in an application',
  },
  {
    id: 7,
    name: 'Ruby-Rose',
    description:
      'An animated, extending horizontally floating action button represents the primary action in an application',
  },
  {
    id: 8,
    name: 'Sienna-Rose',
    description:
      'An animated, extending horizontally floating action button represents the primary action in an application',
  },
  {
    id: 9,
    name: 'Willow-Rose',
    description:
      'An animated, extending horizontally floating action button represents the primary action in an application',
  },
  {
    id: 10,
    name: 'Noah-James',
    description:
      'An animated, extending horizontally floating action button represents the primary action in an application',
  },
];
const MyComponent = ({
  animatedValue,
  visible,
  extended,
  label,
  animateFrom,
  style,
  iconMode,
}) => {
  const [isExtended, setIsExtended] = React.useState(true);

  const isIOS = Platform.OS === 'ios';

  const onScroll = ({nativeEvent}) => {
    const currentScrollPosition =
      Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

    setIsExtended(currentScrollPosition <= 0);
  };

  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}`;
  };

  const fabStyle = {[animateFrom]: 16};

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView onScroll={onScroll}>
        {array.map((e, i) => (
          <View style={styles.item}>
            <View style={[styles.box, {backgroundColor: generateColor()}]}>
              <Text style={[styles.title, {color: 'white'}]}>
                {Array.from(e?.name)[0]}
              </Text>
            </View>
            <View style={{marginLeft: 16}}>
              <Text style={styles.title}>{e?.name}</Text>
              <Text style={{width: width - 100}}>{e?.description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <AnimatedFAB
        icon={'plus'}
        label={'Label'}
        extended={isExtended}
        onPress={() => console.log('Pressed')}
        visible={visible}
        animateFrom={'right'}
        iconMode={'static'}
        style={[styles.fabStyle, style, fabStyle]}
      />
    </SafeAreaView>
  );
};

export default MyComponent;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  fabStyle: {
    bottom: 16,
    right: 16,
    position: 'absolute',
  },
  item: {
    flex: 1,
    height: 80,
    flexDirection: 'row',
    padding: 4,
    margin: 6,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  box: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
