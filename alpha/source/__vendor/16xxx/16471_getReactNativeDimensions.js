// Module ID: 16471
// Function ID: 16472
// Name: getReactNativeDimensions
// Dependencies: [17, 16472]
// Exports: default

// Module 16471 (getReactNativeDimensions)
import _mod16472 from "module_16472" /* 16472 */;
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
  return _mod16472.getReactNativeDimensionsWithDimensions(value, value2);
};
