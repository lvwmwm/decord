// Module ID: 5516
// Function ID: 5517
// Dependencies: [5514]
// Exports: getInvertedTransformStyle

// Module 5516
import PlatformConfig2 from "PlatformConfig" /* 5514 */;


export const getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
