// Module ID: 6287
// Function ID: 6288
// Dependencies: [6285]
// Exports: getInvertedTransformStyle

// Module 6287
import PlatformConfig2 from "PlatformConfig" /* 6285 */;

require = arg1;
const dependencyMap = arg6;

export const getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
