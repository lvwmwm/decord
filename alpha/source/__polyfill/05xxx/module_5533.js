// Module ID: 5533
// Function ID: 5534
// Dependencies: [5531]
// Exports: getInvertedTransformStyle

// Module 5533
import PlatformConfig2 from "PlatformConfig" /* 5531 */;


export function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
}
