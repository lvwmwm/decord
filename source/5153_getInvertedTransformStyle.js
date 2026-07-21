// Module ID: 5153
// Function ID: 43652
// Name: getInvertedTransformStyle
// Dependencies: [0]

// Module 5153 (getInvertedTransformStyle)
arg5.getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = arg1(arg6[0]).PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
