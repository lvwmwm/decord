// Module ID: 16582
// Function ID: 16583
// Name: getReactNativeDimensions
// Dependencies: [17, 16583]
// Exports: default

// Module 16582 (getReactNativeDimensions)
import _mod16583 from "module_16583" /* 16583 */;
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
  return _mod16583.getReactNativeDimensionsWithDimensions(value, value2);
};
