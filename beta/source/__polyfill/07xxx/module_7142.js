// Module ID: 7142
// Function ID: 7143
// Dependencies: [7140]
// Exports: getInvertedTransformStyle

// Module 7142
import PlatformConfig2 from "PlatformConfig" /* 7140 */;

require = arg1;
const dependencyMap = arg6;

export const getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
