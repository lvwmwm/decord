// Module ID: 13216
// Function ID: 100237
// Name: getReactNativeDimensions
// Dependencies: []
// Exports: default

// Module 13216 (getReactNativeDimensions)
let closure_2 = require(dependencyMap[0]);

export default function getReactNativeDimensions() {
  const Dimensions = closure_2.Dimensions;
  const Dimensions2 = closure_2.Dimensions;
  let value = Dimensions.get("screen");
  value = Dimensions2.get("window");
  const reactNativeDimensionsWithDimensions = require(dependencyMap[1]).getReactNativeDimensionsWithDimensions(value, value);
};
