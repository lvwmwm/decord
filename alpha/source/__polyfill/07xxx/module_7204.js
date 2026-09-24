// Module ID: 7204
// Function ID: 7205
// Dependencies: [7202]
// Exports: getInvertedTransformStyle

// Module 7204
import PlatformConfig2 from "PlatformConfig" /* 7202 */;

require = arg1;
const dependencyMap = arg6;

export const getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
