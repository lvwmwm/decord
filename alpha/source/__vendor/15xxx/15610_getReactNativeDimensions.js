// Module ID: 15610
// Function ID: 15611
// Name: getReactNativeDimensions
// Dependencies: [17, 15611]
// Exports: default

// Module 15610 (getReactNativeDimensions)
import _mod15611 from "module_15611" /* 15611 */;
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
  return _mod15611.getReactNativeDimensionsWithDimensions(value, value2);
};
