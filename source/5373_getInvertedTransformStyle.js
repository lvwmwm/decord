// Module ID: 5373
// Function ID: 46029
// Name: getInvertedTransformStyle
// Dependencies: []

// Module 5373 (getInvertedTransformStyle)
arg5.getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = arg1(arg6[0]).PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
