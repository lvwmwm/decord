// Module ID: 5517
// Function ID: 5518
// Dependencies: [5515]
// Exports: getInvertedTransformStyle

// Module 5517
import PlatformConfig2 from "PlatformConfig" /* 5515 */;


export function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
}
