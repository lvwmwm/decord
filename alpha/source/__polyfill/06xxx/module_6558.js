// Module ID: 6558
// Function ID: 6559
// Dependencies: [6556]
// Exports: getInvertedTransformStyle

// Module 6558
import PlatformConfig2 from "PlatformConfig" /* 6556 */;


export const getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
