// Module ID: 16497
// Function ID: 16498
// Name: getReactNativeDimensions
// Dependencies: [17, 16498]
// Exports: default

// Module 16497 (getReactNativeDimensions)
import _mod16498 from "module_16498" /* 16498 */;
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
  return _mod16498.getReactNativeDimensionsWithDimensions(value, value2);
};
