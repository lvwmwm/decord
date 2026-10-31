// Module ID: 16235
// Function ID: 16236
// Name: getReactNativeDimensions
// Dependencies: [17, 16236]
// Exports: default

// Module 16235 (getReactNativeDimensions)
import _mod16236 from "module_16236" /* 16236 */;
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
  return _mod16236.getReactNativeDimensionsWithDimensions(value, value2);
};
