// Module ID: 5313
// Function ID: 5314
// Dependencies: [5311]
// Exports: getInvertedTransformStyle

// Module 5313
import PlatformConfig2 from "PlatformConfig" /* 5311 */;


export function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
}
