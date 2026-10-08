// Module ID: 14489
// Function ID: 14490
// Name: getReactNativeDimensions
// Dependencies: [17, 14490]
// Exports: default

// Module 14489 (getReactNativeDimensions)
import _mod14490 from "module_14490" /* 14490 */;
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
  return _mod14490.getReactNativeDimensionsWithDimensions(value, value2);
};
