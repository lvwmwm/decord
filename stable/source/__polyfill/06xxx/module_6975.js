// Module ID: 6975
// Function ID: 6976
// Dependencies: [6973]
// Exports: getInvertedTransformStyle

// Module 6975
import PlatformConfig2 from "PlatformConfig" /* 6973 */;

require = arg1;
const dependencyMap = arg6;

export const getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
