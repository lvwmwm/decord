// Module ID: 13392
// Function ID: 102775
// Name: result1
// Dependencies: [27, 13393]
// Exports: default

// Module 13392 (result1)
import get_ActivityIndicator from "get ActivityIndicator";


export default function getReactNativeDimensions() {
  const Dimensions = get_ActivityIndicator.Dimensions;
  const Dimensions2 = get_ActivityIndicator.Dimensions;
  let value = Dimensions.get("screen");
  value = Dimensions2.get("window");
  const reactNativeDimensionsWithDimensions = require(13393) /* getReactNativeDimensionsWithDimensions */.getReactNativeDimensionsWithDimensions(value, value);
};
