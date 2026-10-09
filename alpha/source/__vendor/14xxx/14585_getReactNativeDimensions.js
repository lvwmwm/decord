// Module ID: 14585
// Function ID: 14586
// Name: getReactNativeDimensions
// Dependencies: [17, 14586]
// Exports: default

// Module 14585 (getReactNativeDimensions)
import _mod14586 from "module_14586" /* 14586 */;
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
  return _mod14586.getReactNativeDimensionsWithDimensions(value, value2);
};
