// Module ID: 6292
// Function ID: 6293
// Dependencies: [6290]
// Exports: getInvertedTransformStyle

// Module 6292
import PlatformConfig2 from "PlatformConfig" /* 6290 */;

require = arg1;
const dependencyMap = arg6;

export const getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
