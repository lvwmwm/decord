// Module ID: 16234
// Function ID: 16235
// Name: getReactNativeDimensions
// Dependencies: [17, 16235]
// Exports: default

// Module 16234 (getReactNativeDimensions)
import _mod16235 from "module_16235" /* 16235 */;
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
  return _mod16235.getReactNativeDimensionsWithDimensions(value, value2);
};
