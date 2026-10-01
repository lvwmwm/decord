// Module ID: 13898
// Function ID: 13899
// Name: getReactNativeDimensions
// Dependencies: [17, 13899]
// Exports: default

// Module 13898 (getReactNativeDimensions)
import _mod13899 from "module_13899" /* 13899 */;
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
  return _mod13899.getReactNativeDimensionsWithDimensions(value, value2);
};
