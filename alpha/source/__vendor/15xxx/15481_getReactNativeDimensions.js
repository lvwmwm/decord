// Module ID: 15481
// Function ID: 15482
// Name: getReactNativeDimensions
// Dependencies: [17, 15482]
// Exports: default

// Module 15481 (getReactNativeDimensions)
import _mod15482 from "module_15482" /* 15482 */;
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
  return _mod15482.getReactNativeDimensionsWithDimensions(value, value2);
};
