// Module ID: 14662
// Function ID: 14663
// Name: getReactNativeDimensions
// Dependencies: [17, 14663]
// Exports: default

// Module 14662 (getReactNativeDimensions)
import _mod14663 from "module_14663" /* 14663 */;
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
  return _mod14663.getReactNativeDimensionsWithDimensions(value, value2);
};
