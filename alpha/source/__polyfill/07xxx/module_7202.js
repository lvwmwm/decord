// Module ID: 7202
// Function ID: 7203
// Dependencies: [7200]
// Exports: getInvertedTransformStyle

// Module 7202
import PlatformConfig2 from "PlatformConfig" /* 7200 */;

require = arg1;
const dependencyMap = arg6;

export const getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
