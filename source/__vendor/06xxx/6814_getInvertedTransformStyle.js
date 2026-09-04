// Module ID: 6814
// Function ID: 6815
// Name: getInvertedTransformStyle
// Dependencies: [6812]

// Module 6814 (getInvertedTransformStyle)
import PlatformConfig2 from "PlatformConfig" /* 6812 */;

require = arg1;
const dependencyMap = arg6;
arg5.getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
