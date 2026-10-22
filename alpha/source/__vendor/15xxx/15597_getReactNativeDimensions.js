// Module ID: 15597
// Function ID: 15598
// Name: getReactNativeDimensions
// Dependencies: [17, 15598]
// Exports: default

// Module 15597 (getReactNativeDimensions)
import _mod15598 from "module_15598" /* 15598 */;
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
  return _mod15598.getReactNativeDimensionsWithDimensions(value, value2);
};
