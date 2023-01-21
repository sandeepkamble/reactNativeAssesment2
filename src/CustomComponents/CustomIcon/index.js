import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import IconConfig from '../../../selection.json';

const CustomIcon = createIconSetFromIcoMoon(
  IconConfig,
  'icomoon',
  'icomoon.ttf',
);

export default CustomIcon;
