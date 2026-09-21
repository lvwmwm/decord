// Module ID: 7110
// Function ID: 7111
// Dependencies: [7108]
// Exports: getInvertedTransformStyle

// Module 7110
import PlatformConfig2 from "PlatformConfig" /* 7108 */;

require = arg1;
const dependencyMap = arg6;

export const getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
