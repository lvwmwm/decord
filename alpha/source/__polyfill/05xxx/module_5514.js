// Module ID: 5514
// Function ID: 5515
// Dependencies: [5512]
// Exports: getInvertedTransformStyle

// Module 5514
import PlatformConfig2 from "PlatformConfig" /* 5512 */;


export const getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
