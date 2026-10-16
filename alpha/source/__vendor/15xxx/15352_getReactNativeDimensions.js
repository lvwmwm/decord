// Module ID: 15352
// Function ID: 15353
// Name: getReactNativeDimensions
// Dependencies: [17, 15353]
// Exports: default

// Module 15352 (getReactNativeDimensions)
import _mod15353 from "module_15353" /* 15353 */;
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
  return _mod15353.getReactNativeDimensionsWithDimensions(value, value2);
};
