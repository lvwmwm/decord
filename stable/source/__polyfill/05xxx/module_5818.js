// Module ID: 5818
// Function ID: 5819
// Dependencies: [5816]
// Exports: getInvertedTransformStyle

// Module 5818
import PlatformConfig2 from "PlatformConfig" /* 5816 */;


export function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
}
