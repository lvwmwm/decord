// Module ID: 5548
// Function ID: 5549
// Dependencies: [5546]
// Exports: getInvertedTransformStyle

// Module 5548
import PlatformConfig2 from "PlatformConfig" /* 5546 */;


export const getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
