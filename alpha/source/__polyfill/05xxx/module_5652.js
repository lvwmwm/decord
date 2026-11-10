// Module ID: 5652
// Function ID: 5653
// Dependencies: [5650]
// Exports: getInvertedTransformStyle

// Module 5652
import PlatformConfig2 from "PlatformConfig" /* 5650 */;


export function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
}
