// Module ID: 15553
// Function ID: 15554
// Name: getReactNativeDimensions
// Dependencies: [17, 15554]
// Exports: default

// Module 15553 (getReactNativeDimensions)
import _mod15554 from "module_15554" /* 15554 */;
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
  return _mod15554.getReactNativeDimensionsWithDimensions(value, value2);
};
