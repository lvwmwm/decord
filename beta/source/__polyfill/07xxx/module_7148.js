// Module ID: 7148
// Function ID: 7149
// Dependencies: [7146]
// Exports: getInvertedTransformStyle

// Module 7148
import PlatformConfig2 from "PlatformConfig" /* 7146 */;

require = arg1;
const dependencyMap = arg6;

export const getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
