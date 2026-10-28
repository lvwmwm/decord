// Module ID: 5552
// Function ID: 5553
// Dependencies: [5550]
// Exports: getInvertedTransformStyle

// Module 5552
import PlatformConfig2 from "PlatformConfig" /* 5550 */;


export const getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
