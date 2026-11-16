// Module ID: 5682
// Function ID: 5683
// Dependencies: [5680]
// Exports: getInvertedTransformStyle

// Module 5682
import PlatformConfig2 from "PlatformConfig" /* 5680 */;


export function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
}
