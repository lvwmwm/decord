// Module ID: 13218
// Function ID: 100259
// Name: getReactNativeDimensions
// Dependencies: [50, 977272832]
// Exports: default

// Module 13218 (getReactNativeDimensions)
import defineLazyObjectProperty from "defineLazyObjectProperty";


export default function getReactNativeDimensions() {
  const Dimensions = defineLazyObjectProperty.Dimensions;
  const Dimensions2 = defineLazyObjectProperty.Dimensions;
  let value = Dimensions.get("screen");
  value = Dimensions2.get("window");
  const reactNativeDimensionsWithDimensions = require(dependencyMap[1]).getReactNativeDimensionsWithDimensions(value, value);
};
