// Module ID: 15690
// Function ID: 15691
// Name: getReactNativeDimensions
// Dependencies: [17, 15691]
// Exports: default

// Module 15690 (getReactNativeDimensions)
import _mod15691 from "module_15691" /* 15691 */;
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
  return _mod15691.getReactNativeDimensionsWithDimensions(value, value2);
};
