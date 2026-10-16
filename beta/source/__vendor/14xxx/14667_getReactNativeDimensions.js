// Module ID: 14667
// Function ID: 14668
// Name: getReactNativeDimensions
// Dependencies: [17, 14668]
// Exports: default

// Module 14667 (getReactNativeDimensions)
import _mod14668 from "module_14668" /* 14668 */;
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
  return _mod14668.getReactNativeDimensionsWithDimensions(value, value2);
};
