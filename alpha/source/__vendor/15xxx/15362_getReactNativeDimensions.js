// Module ID: 15362
// Function ID: 15363
// Name: getReactNativeDimensions
// Dependencies: [17, 15363]
// Exports: default

// Module 15362 (getReactNativeDimensions)
import _mod15363 from "module_15363" /* 15363 */;
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
  return _mod15363.getReactNativeDimensionsWithDimensions(value, value2);
};
