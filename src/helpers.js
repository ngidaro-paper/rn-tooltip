//  @flow

import { Platform, Dimensions } from 'react-native';

const Screen = Dimensions.get('window');
export const isIOS = Platform.OS === 'ios';

export const Colors = {
  darkergray: '#617080',
  overlay_bright: 'rgba(250, 250, 250, 0.70)',
};
