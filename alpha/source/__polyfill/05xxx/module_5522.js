// Module ID: 5522
// Function ID: 5523
// Dependencies: [5520]
// Exports: getInvertedTransformStyle

// Module 5522
import PlatformConfig2 from "PlatformConfig" /* 5520 */;


export function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
}
