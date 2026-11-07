// Module ID: 5650
// Function ID: 5651
// Dependencies: [5648]
// Exports: getInvertedTransformStyle

// Module 5650
import PlatformConfig2 from "PlatformConfig" /* 5648 */;


export function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
}
