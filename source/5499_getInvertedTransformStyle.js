// Module ID: 5499
// Function ID: 5500
// Name: getInvertedTransformStyle
// Dependencies: [5497]

// Module 5499 (getInvertedTransformStyle)
const require = arg1;
const dependencyMap = arg6;
arg5.getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = require(5497) /* PlatformConfig */.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
