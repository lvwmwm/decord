// Module ID: 15021
// Function ID: 15022
// Name: getReactNativeDimensions
// Dependencies: [17, 15022]
// Exports: default

// Module 15021 (getReactNativeDimensions)
import _mod15022 from "module_15022" /* 15022 */;
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
  return _mod15022.getReactNativeDimensionsWithDimensions(value, value2);
};
