// Module ID: 16194
// Function ID: 16195
// Name: getReactNativeDimensions
// Dependencies: [17, 16195]
// Exports: default

// Module 16194 (getReactNativeDimensions)
import _mod16195 from "module_16195" /* 16195 */;
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
  return _mod16195.getReactNativeDimensionsWithDimensions(value, value2);
};
