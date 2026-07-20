// Module ID: 5151
// Function ID: 43611
// Name: getInvertedTransformStyle
// Dependencies: [0]

// Module 5151 (getInvertedTransformStyle)
arg5.getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = arg1(arg6[0]).PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
