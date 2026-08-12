// Module ID: 5685
// Function ID: 5686
// Name: getInvertedTransformStyle
// Dependencies: [5683]

// Module 5685 (getInvertedTransformStyle)
const require = arg1;
const dependencyMap = arg6;
arg5.getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = require(5683) /* PlatformConfig */.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
