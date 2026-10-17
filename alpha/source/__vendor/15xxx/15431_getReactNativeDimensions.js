// Module ID: 15431
// Function ID: 15432
// Name: getReactNativeDimensions
// Dependencies: [17, 15432]
// Exports: default

// Module 15431 (getReactNativeDimensions)
import _mod15432 from "module_15432" /* 15432 */;
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
  return _mod15432.getReactNativeDimensionsWithDimensions(value, value2);
};
