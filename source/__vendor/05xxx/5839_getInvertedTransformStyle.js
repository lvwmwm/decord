// Module ID: 5839
// Function ID: 5840
// Name: getInvertedTransformStyle
// Dependencies: [5837]

// Module 5839 (getInvertedTransformStyle)
import PlatformConfig2 from "PlatformConfig" /* 5837 */;

require = arg1;
const dependencyMap = arg6;
arg5.getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
