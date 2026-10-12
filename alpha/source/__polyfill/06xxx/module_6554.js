// Module ID: 6554
// Function ID: 6555
// Dependencies: [6552]
// Exports: getInvertedTransformStyle

// Module 6554
import PlatformConfig2 from "PlatformConfig" /* 6552 */;


export const getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
