// Module ID: 14170
// Function ID: 14171
// Name: getReactNativeDimensions
// Dependencies: [17, 14171]
// Exports: default

// Module 14170 (getReactNativeDimensions)
import _mod14171 from "module_14171" /* 14171 */;
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
  return _mod14171.getReactNativeDimensionsWithDimensions(value, value2);
};
