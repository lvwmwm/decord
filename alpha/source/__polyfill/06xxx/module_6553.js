// Module ID: 6553
// Function ID: 6554
// Dependencies: [6551]
// Exports: getInvertedTransformStyle

// Module 6553
import PlatformConfig2 from "PlatformConfig" /* 6551 */;


export const getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
