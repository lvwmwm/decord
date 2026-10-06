// Module ID: 6285
// Function ID: 6286
// Dependencies: [6283]
// Exports: getInvertedTransformStyle

// Module 6285
import PlatformConfig2 from "PlatformConfig" /* 6283 */;


export const getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
