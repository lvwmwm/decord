// Module ID: 16494
// Function ID: 16495
// Name: getReactNativeDimensions
// Dependencies: [17, 16495]
// Exports: default

// Module 16494 (getReactNativeDimensions)
import _mod16495 from "module_16495" /* 16495 */;
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
  return _mod16495.getReactNativeDimensionsWithDimensions(value, value2);
};
