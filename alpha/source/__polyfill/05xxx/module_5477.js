// Module ID: 5477
// Function ID: 5478
// Dependencies: [5475]
// Exports: getInvertedTransformStyle

// Module 5477
import PlatformConfig2 from "PlatformConfig" /* 5475 */;


export const getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
