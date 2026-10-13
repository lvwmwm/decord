// Module ID: 14983
// Function ID: 14984
// Name: getReactNativeDimensions
// Dependencies: [17, 14984]
// Exports: default

// Module 14983 (getReactNativeDimensions)
import _mod14984 from "module_14984" /* 14984 */;
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
  return _mod14984.getReactNativeDimensionsWithDimensions(value, value2);
};
