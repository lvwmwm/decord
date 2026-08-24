// Module ID: 7096
// Function ID: 7097
// Name: getInvertedTransformStyle
// Dependencies: [7094]

// Module 7096 (getInvertedTransformStyle)
import PlatformConfig2 from "PlatformConfig" /* 7094 */;

require = arg1;
const dependencyMap = arg6;
arg5.getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
