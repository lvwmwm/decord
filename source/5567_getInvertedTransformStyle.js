// Module ID: 5567
// Function ID: 5568
// Name: getInvertedTransformStyle
// Dependencies: [5565]

// Module 5567 (getInvertedTransformStyle)
const require = arg1;
const dependencyMap = arg6;
arg5.getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = require(5565) /* PlatformConfig */.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
