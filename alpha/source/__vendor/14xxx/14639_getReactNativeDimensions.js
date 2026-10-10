// Module ID: 14639
// Function ID: 14640
// Name: getReactNativeDimensions
// Dependencies: [17, 14640]
// Exports: default

// Module 14639 (getReactNativeDimensions)
import _mod14640 from "module_14640" /* 14640 */;
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
  return _mod14640.getReactNativeDimensionsWithDimensions(value, value2);
};
