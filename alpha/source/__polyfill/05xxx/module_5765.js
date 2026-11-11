// Module ID: 5765
// Function ID: 5766
// Dependencies: [5763]
// Exports: getInvertedTransformStyle

// Module 5765
import PlatformConfig2 from "PlatformConfig" /* 5763 */;


export function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
}
