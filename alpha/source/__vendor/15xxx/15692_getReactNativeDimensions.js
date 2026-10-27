// Module ID: 15692
// Function ID: 15693
// Name: getReactNativeDimensions
// Dependencies: [17, 15693]
// Exports: default

// Module 15692 (getReactNativeDimensions)
import _mod15693 from "module_15693" /* 15693 */;
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
  return _mod15693.getReactNativeDimensionsWithDimensions(value, value2);
};
