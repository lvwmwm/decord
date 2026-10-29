// Module ID: 5553
// Function ID: 5554
// Dependencies: [5551]
// Exports: getInvertedTransformStyle

// Module 5553
import PlatformConfig2 from "PlatformConfig" /* 5551 */;


export function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
}
