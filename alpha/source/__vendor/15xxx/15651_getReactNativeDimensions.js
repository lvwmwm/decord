// Module ID: 15651
// Function ID: 15652
// Name: getReactNativeDimensions
// Dependencies: [17, 15652]
// Exports: default

// Module 15651 (getReactNativeDimensions)
import _mod15652 from "module_15652" /* 15652 */;
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
  return _mod15652.getReactNativeDimensionsWithDimensions(value, value2);
};
