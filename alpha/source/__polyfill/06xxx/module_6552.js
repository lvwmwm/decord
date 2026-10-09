// Module ID: 6552
// Function ID: 6553
// Dependencies: [6550]
// Exports: getInvertedTransformStyle

// Module 6552
import PlatformConfig2 from "PlatformConfig" /* 6550 */;


export const getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
