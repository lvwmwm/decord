// Module ID: 16382
// Function ID: 16383
// Name: getReactNativeDimensions
// Dependencies: [17, 16383]
// Exports: default

// Module 16382 (getReactNativeDimensions)
import _mod16383 from "module_16383" /* 16383 */;
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
  return _mod16383.getReactNativeDimensionsWithDimensions(value, value2);
};
