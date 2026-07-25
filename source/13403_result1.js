// Module ID: 13403
// Function ID: 102902
// Name: result1
// Dependencies: [27, 13404]
// Exports: default

// Module 13403 (result1)
import get_ActivityIndicator from "get ActivityIndicator";


export default function getReactNativeDimensions() {
  const Dimensions = get_ActivityIndicator.Dimensions;
  const Dimensions2 = get_ActivityIndicator.Dimensions;
  let value = Dimensions.get("screen");
  value = Dimensions2.get("window");
  const reactNativeDimensionsWithDimensions = require(13404) /* getReactNativeDimensionsWithDimensions */.getReactNativeDimensionsWithDimensions(value, value);
};
