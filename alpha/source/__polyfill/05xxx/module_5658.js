// Module ID: 5658
// Function ID: 5659
// Dependencies: [5656]
// Exports: getInvertedTransformStyle

// Module 5658
import PlatformConfig2 from "PlatformConfig" /* 5656 */;


export function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
}
