// Module ID: 6778
// Function ID: 6779
// Dependencies: [6776]
// Exports: getInvertedTransformStyle

// Module 6778
import PlatformConfig2 from "PlatformConfig" /* 6776 */;


export const getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
