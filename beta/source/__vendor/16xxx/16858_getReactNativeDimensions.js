// Module ID: 16858
// Function ID: 16859
// Name: getReactNativeDimensions
// Dependencies: [17, 16859]
// Exports: default

// Module 16858 (getReactNativeDimensions)
import _mod16859 from "module_16859" /* 16859 */;
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
  return _mod16859.getReactNativeDimensionsWithDimensions(value, value2);
};
