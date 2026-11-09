// Module ID: 16552
// Function ID: 16553
// Name: getReactNativeDimensions
// Dependencies: [17, 16553]
// Exports: default

// Module 16552 (getReactNativeDimensions)
import _mod16553 from "module_16553" /* 16553 */;
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
  return _mod16553.getReactNativeDimensionsWithDimensions(value, value2);
};
