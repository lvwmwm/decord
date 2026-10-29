// Module ID: 16154
// Function ID: 16155
// Name: getReactNativeDimensions
// Dependencies: [17, 16155]
// Exports: default

// Module 16154 (getReactNativeDimensions)
import _mod16155 from "module_16155" /* 16155 */;
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
  return _mod16155.getReactNativeDimensionsWithDimensions(value, value2);
};
