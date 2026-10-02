// Module ID: 13900
// Function ID: 13901
// Name: getReactNativeDimensions
// Dependencies: [17, 13901]
// Exports: default

// Module 13900 (getReactNativeDimensions)
import _mod13901 from "module_13901" /* 13901 */;
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
  return _mod13901.getReactNativeDimensionsWithDimensions(value, value2);
};
