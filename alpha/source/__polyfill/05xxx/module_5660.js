// Module ID: 5660
// Function ID: 5661
// Dependencies: [5658]
// Exports: getInvertedTransformStyle

// Module 5660
import PlatformConfig2 from "PlatformConfig" /* 5658 */;


export function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
}
