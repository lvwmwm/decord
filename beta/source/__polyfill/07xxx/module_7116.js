// Module ID: 7116
// Function ID: 7117
// Dependencies: [7114]
// Exports: getInvertedTransformStyle

// Module 7116
import PlatformConfig2 from "PlatformConfig" /* 7114 */;

require = arg1;
const dependencyMap = arg6;

export const getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
