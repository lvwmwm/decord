// Module ID: 6359
// Function ID: 6360
// Dependencies: [6357]
// Exports: getInvertedTransformStyle

// Module 6359
import PlatformConfig2 from "PlatformConfig" /* 6357 */;


export const getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
