// Module ID: 5411
// Function ID: 46186
// Name: getInvertedTransformStyle
// Dependencies: [5409]

// Module 5411 (getInvertedTransformStyle)
const require = arg1;
const dependencyMap = arg6;
arg5.getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = require(5409) /* PlatformConfig */.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
