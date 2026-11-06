// Module ID: 5680
// Function ID: 5681
// Dependencies: [5678]
// Exports: getInvertedTransformStyle

// Module 5680
import PlatformConfig2 from "PlatformConfig" /* 5678 */;


export function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
}
