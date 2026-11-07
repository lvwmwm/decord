// Module ID: 16542
// Function ID: 16543
// Name: getReactNativeDimensions
// Dependencies: [17, 16543]
// Exports: default

// Module 16542 (getReactNativeDimensions)
import _mod16543 from "module_16543" /* 16543 */;
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
  return _mod16543.getReactNativeDimensionsWithDimensions(value, value2);
};
