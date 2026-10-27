// Module ID: 15435
// Function ID: 15436
// Name: getReactNativeDimensions
// Dependencies: [17, 15436]
// Exports: default

// Module 15435 (getReactNativeDimensions)
import _mod15436 from "module_15436" /* 15436 */;
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
  return _mod15436.getReactNativeDimensionsWithDimensions(value, value2);
};
