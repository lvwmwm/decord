// Module ID: 5822
// Function ID: 5823
// Dependencies: [5820]
// Exports: getInvertedTransformStyle

// Module 5822
import PlatformConfig2 from "PlatformConfig" /* 5820 */;


export function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
}
