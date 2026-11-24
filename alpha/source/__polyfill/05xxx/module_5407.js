// Module ID: 5407
// Function ID: 5408
// Dependencies: [5405]
// Exports: getInvertedTransformStyle

// Module 5407
import PlatformConfig2 from "PlatformConfig" /* 5405 */;


export function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
}
