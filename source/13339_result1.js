// Module ID: 13339
// Function ID: 102448
// Name: result1
// Dependencies: [27, 13340]
// Exports: default

// Module 13339 (result1)
import get_ActivityIndicator from "get ActivityIndicator";


export default function getReactNativeDimensions() {
  const Dimensions = get_ActivityIndicator.Dimensions;
  const Dimensions2 = get_ActivityIndicator.Dimensions;
  let value = Dimensions.get("screen");
  value = Dimensions2.get("window");
  const reactNativeDimensionsWithDimensions = require(13340) /* getReactNativeDimensionsWithDimensions */.getReactNativeDimensionsWithDimensions(value, value);
};
