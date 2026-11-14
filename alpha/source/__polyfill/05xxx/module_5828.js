// Module ID: 5828
// Function ID: 5829
// Dependencies: [5826]
// Exports: getInvertedTransformStyle

// Module 5828
import PlatformConfig2 from "PlatformConfig" /* 5826 */;


export function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
}
