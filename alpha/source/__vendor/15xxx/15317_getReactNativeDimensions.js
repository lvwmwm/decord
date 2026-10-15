// Module ID: 15317
// Function ID: 15318
// Name: getReactNativeDimensions
// Dependencies: [17, 15318]
// Exports: default

// Module 15317 (getReactNativeDimensions)
import _mod15318 from "module_15318" /* 15318 */;
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
  return _mod15318.getReactNativeDimensionsWithDimensions(value, value2);
};
