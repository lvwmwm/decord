// Module ID: 16239
// Function ID: 16240
// Name: getReactNativeDimensions
// Dependencies: [17, 16240]
// Exports: default

// Module 16239 (getReactNativeDimensions)
import _mod16240 from "module_16240" /* 16240 */;
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
  return _mod16240.getReactNativeDimensionsWithDimensions(value, value2);
};
