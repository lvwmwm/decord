// Module ID: 15655
// Function ID: 15656
// Name: getReactNativeDimensions
// Dependencies: [17, 15656]
// Exports: default

// Module 15655 (getReactNativeDimensions)
import _mod15656 from "module_15656" /* 15656 */;
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
  return _mod15656.getReactNativeDimensionsWithDimensions(value, value2);
};
