// Module ID: 6774
// Function ID: 6775
// Dependencies: [6772]
// Exports: getInvertedTransformStyle

// Module 6774
import PlatformConfig2 from "PlatformConfig" /* 6772 */;


export const getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
