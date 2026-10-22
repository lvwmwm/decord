// Module ID: 5502
// Function ID: 5503
// Dependencies: [5500]
// Exports: getInvertedTransformStyle

// Module 5502
import PlatformConfig2 from "PlatformConfig" /* 5500 */;


export const getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
