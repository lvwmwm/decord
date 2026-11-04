// Module ID: 16484
// Function ID: 16485
// Name: getReactNativeDimensions
// Dependencies: [17, 16485]
// Exports: default

// Module 16484 (getReactNativeDimensions)
import _mod16485 from "module_16485" /* 16485 */;
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
  return _mod16485.getReactNativeDimensionsWithDimensions(value, value2);
};
