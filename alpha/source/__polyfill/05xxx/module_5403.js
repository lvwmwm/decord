// Module ID: 5403
// Function ID: 5404
// Dependencies: [5401]
// Exports: getInvertedTransformStyle

// Module 5403
import PlatformConfig2 from "PlatformConfig" /* 5401 */;


export function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
}
