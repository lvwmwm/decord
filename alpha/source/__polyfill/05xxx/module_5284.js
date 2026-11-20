// Module ID: 5284
// Function ID: 5285
// Dependencies: [5282]
// Exports: getInvertedTransformStyle

// Module 5284
import PlatformConfig2 from "PlatformConfig" /* 5282 */;


export function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
}
