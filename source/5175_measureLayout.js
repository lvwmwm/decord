// Module ID: 5175
// Function ID: 43829
// Name: measureLayout
// Dependencies: []
// Exports: areDimensionsNotEqual, measureFirstChildLayout, measureItemLayout, measureParentSize

// Module 5175 (measureLayout)
function measureLayout(measureLayout, width) {
  return measureLayoutRelative(measureLayout, measureLayout, width);
}
function measureLayoutRelative(measureLayout, current2, width) {
  const size = { <string:80573440>: "r", <string:80533760>: "onRequireModeratorMFAClick", <string:80487680>: "Array", <string:80573184>: "isSpamMessageRequest" };
  const PixelRatio = size;
  measureLayout.measureLayout(current2, (arg0, arg1) => {
    size.x = arg0;
    size.y = arg1;
    size.width = callback(arg2);
    size.height = callback(arg3);
  });
  if (width) {
    if (areDimensionsEqual(size.width, width.width)) {
      size.width = width.width;
    }
    if (areDimensionsEqual(size.height, width.height)) {
      size.height = width.height;
    }
  }
  return size;
}
function areDimensionsEqual(height, height2) {
  const pixelSizeForLayoutSize = PixelRatio.getPixelSizeForLayoutSize(height);
  return Math.abs(pixelSizeForLayoutSize - PixelRatio.getPixelSizeForLayoutSize(height2)) <= 1;
}
function roundOffPixel(arg0) {
  return PixelRatio.roundToNearestPixel(arg0);
}
const PixelRatio = require(dependencyMap[0]).PixelRatio;

export const areDimensionsNotEqual = function areDimensionsNotEqual(height, height2) {
  return !areDimensionsEqual(height, height2);
};
export { areDimensionsEqual };
export { roundOffPixel };
export const measureParentSize = function measureParentSize(current) {
  const size = measureLayout(current, undefined);
  return { width: size.width, height: size.height };
};
export const measureFirstChildLayout = function measureFirstChildLayout(current, current2) {
  return measureLayoutRelative(current, current2, undefined);
};
export const measureItemLayout = function measureItemLayout(current, closure_27) {
  return measureLayout(current, closure_27);
};
