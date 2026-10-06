// Module ID: 6366
// Function ID: 6367
// Dependencies: [6364]
// Exports: getInvertedTransformStyle

// Module 6366
import PlatformConfig2 from "PlatformConfig" /* 6364 */;


export const getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
