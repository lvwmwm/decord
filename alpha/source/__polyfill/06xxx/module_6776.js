// Module ID: 6776
// Function ID: 6777
// Dependencies: [6774]
// Exports: getInvertedTransformStyle

// Module 6776
import PlatformConfig2 from "PlatformConfig" /* 6774 */;


export const getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
