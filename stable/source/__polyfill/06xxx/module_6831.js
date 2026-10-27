// Module ID: 6831
// Function ID: 6832
// Dependencies: [6829]
// Exports: getInvertedTransformStyle

// Module 6831
import PlatformConfig2 from "PlatformConfig" /* 6829 */;


export const getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
