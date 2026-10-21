// Module ID: 5498
// Function ID: 5499
// Dependencies: [5496]
// Exports: getInvertedTransformStyle

// Module 5498
import PlatformConfig2 from "PlatformConfig" /* 5496 */;


export const getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
