// Module ID: 15463
// Function ID: 15464
// Name: getReactNativeDimensions
// Dependencies: [17, 15464]
// Exports: default

// Module 15463 (getReactNativeDimensions)
import _mod15464 from "module_15464" /* 15464 */;
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
  return _mod15464.getReactNativeDimensionsWithDimensions(value, value2);
};
