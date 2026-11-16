// Module ID: 16581
// Function ID: 16582
// Name: getReactNativeDimensions
// Dependencies: [17, 16582]
// Exports: default

// Module 16581 (getReactNativeDimensions)
import _mod16582 from "module_16582" /* 16582 */;
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
  return _mod16582.getReactNativeDimensionsWithDimensions(value, value2);
};
