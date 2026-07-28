// Module ID: 13448
// Function ID: 103080
// Name: result1
// Dependencies: [27, 13449]
// Exports: default

// Module 13448 (result1)
import get_ActivityIndicator from "get ActivityIndicator";


export default function getReactNativeDimensions() {
  const Dimensions = get_ActivityIndicator.Dimensions;
  const Dimensions2 = get_ActivityIndicator.Dimensions;
  let value = Dimensions.get("screen");
  value = Dimensions2.get("window");
  const reactNativeDimensionsWithDimensions = require(13449) /* getReactNativeDimensionsWithDimensions */.getReactNativeDimensionsWithDimensions(value, value);
};
