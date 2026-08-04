// Module ID: 5528
// Function ID: 5529
// Name: getInvertedTransformStyle
// Dependencies: [5526]

// Module 5528 (getInvertedTransformStyle)
const require = arg1;
const dependencyMap = arg6;
arg5.getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = require(5526) /* PlatformConfig */.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
