// Module ID: 16579
// Function ID: 16580
// Name: getReactNativeDimensions
// Dependencies: [17, 16580]
// Exports: default

// Module 16579 (getReactNativeDimensions)
import _mod16580 from "module_16580" /* 16580 */;
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
  return _mod16580.getReactNativeDimensionsWithDimensions(value, value2);
};
