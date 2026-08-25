// Module ID: 5752
// Function ID: 5753
// Name: getInvertedTransformStyle
// Dependencies: [5750]

// Module 5752 (getInvertedTransformStyle)
import PlatformConfig2 from "PlatformConfig" /* 5750 */;

require = arg1;
const dependencyMap = arg6;
arg5.getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
