import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from '../screens/Home';
import About from '../screens/About';

const screens = {
  About: {
    screen: About
  },
  Home: {
    screen: Home
  },
}

const homeStack = createStackNavigator(screens);
export default createAppContainer(homeStack);