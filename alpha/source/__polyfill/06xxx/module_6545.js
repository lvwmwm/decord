// Module ID: 6545
// Function ID: 6546
// Dependencies: [6543]
// Exports: getInvertedTransformStyle

// Module 6545
import PlatformConfig2 from "PlatformConfig" /* 6543 */;


export const getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
