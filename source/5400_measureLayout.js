// Module ID: 5400
// Function ID: 46271
// Name: measureLayout
// Dependencies: [27]
// Exports: areDimensionsNotEqual, measureFirstChildLayout, measureItemLayout, measureParentSize

// Module 5400 (measureLayout)
import { PixelRatio } from "get ActivityIndicator";

function measureLayout(measureLayout, width) {
  return measureLayoutRelative(measureLayout, measureLayout, width);
}
function measureLayoutRelative(measureLayout, current2, width) {
  const size = { x: 0, y: 0, width: 0, height: 0 };
  measureLayout.measureLayout(current2, (arg0, arg1) => {
    size.x = arg0;
    size.y = arg1;
    size.width = outer1_4(arg2);
    size.height = outer1_4(arg3);
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
export const measureItemLayout = function measureItemLayout(current, outer1_27) {
  return measureLayout(current, outer1_27);
};
