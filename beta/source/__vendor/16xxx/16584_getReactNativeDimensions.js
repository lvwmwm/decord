// Module ID: 16584
// Function ID: 16585
// Name: getReactNativeDimensions
// Dependencies: [17, 16585]
// Exports: default

// Module 16584 (getReactNativeDimensions)
import _mod16585 from "module_16585" /* 16585 */;
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
  return _mod16585.getReactNativeDimensionsWithDimensions(value, value2);
};
