// Module ID: 15631
// Function ID: 15632
// Name: getReactNativeDimensions
// Dependencies: [17, 15632]
// Exports: default

// Module 15631 (getReactNativeDimensions)
import _mod15632 from "module_15632" /* 15632 */;
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
  return _mod15632.getReactNativeDimensionsWithDimensions(value, value2);
};
