// Module ID: 5152
// Function ID: 43659
// Name: getInvertedTransformStyle
// Dependencies: [0]

// Module 5152 (getInvertedTransformStyle)
arg5.getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = arg1(arg6[0]).PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
