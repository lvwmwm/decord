// Module ID: 5282
// Function ID: 5283
// Dependencies: [5280]
// Exports: getInvertedTransformStyle

// Module 5282
import PlatformConfig2 from "PlatformConfig" /* 5280 */;


export function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
}
