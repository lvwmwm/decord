// Module ID: 13225
// Function ID: 100292
// Name: getReactNativeDimensions
// Dependencies: [50, 436207616]
// Exports: default

// Module 13225 (getReactNativeDimensions)
import defineLazyObjectProperty from "defineLazyObjectProperty";


export default function getReactNativeDimensions() {
  const Dimensions = defineLazyObjectProperty.Dimensions;
  const Dimensions2 = defineLazyObjectProperty.Dimensions;
  let value = Dimensions.get("screen");
  value = Dimensions2.get("window");
  const reactNativeDimensionsWithDimensions = require(dependencyMap[1]).getReactNativeDimensionsWithDimensions(value, value);
};
