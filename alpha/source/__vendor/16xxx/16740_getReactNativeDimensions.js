// Module ID: 16740
// Function ID: 16741
// Name: getReactNativeDimensions
// Dependencies: [17, 16741]
// Exports: default

// Module 16740 (getReactNativeDimensions)
import _mod16741 from "module_16741" /* 16741 */;
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
  return _mod16741.getReactNativeDimensionsWithDimensions(value, value2);
};
