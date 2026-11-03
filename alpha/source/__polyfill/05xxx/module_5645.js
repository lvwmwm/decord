// Module ID: 5645
// Function ID: 5646
// Dependencies: [5643]
// Exports: getInvertedTransformStyle

// Module 5645
import PlatformConfig2 from "PlatformConfig" /* 5643 */;


export function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
}
