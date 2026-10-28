// Module ID: 15918
// Function ID: 15919
// Name: getReactNativeDimensions
// Dependencies: [17, 15919]
// Exports: default

// Module 15918 (getReactNativeDimensions)
import _mod15919 from "module_15919" /* 15919 */;
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
  return _mod15919.getReactNativeDimensionsWithDimensions(value, value2);
};
