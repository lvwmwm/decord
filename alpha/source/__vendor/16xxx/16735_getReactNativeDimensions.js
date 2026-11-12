// Module ID: 16735
// Function ID: 16736
// Name: getReactNativeDimensions
// Dependencies: [17, 16736]
// Exports: default

// Module 16735 (getReactNativeDimensions)
import _mod16736 from "module_16736" /* 16736 */;
import react_native from "react-native" /* 17 */;


export default function getReactNativeDimensions() {
  let value = null;
  let value2 = null;
  try {
    const Dimensions = react_native.Dimensions;
    value = Dimensions.get("screen");
  } catch (err) {
  }
  try {
    const Dimensions2 = react_native.Dimensions;
    value2 = Dimensions2.get("window");
  } catch (err) {
  }
  return _mod16736.getReactNativeDimensionsWithDimensions(value, value2);
};
