// Module ID: 7108
// Function ID: 7109
// Name: PlatformConfig
// Dependencies: [7109]

// Module 7108 (PlatformConfig)
import reactNativeVersion from "reactNativeVersion" /* 7109 */;

const obj = { defaultDrawDistance: 250, supportsOffsetCorrection: true, trackAverageRenderTimeForOffsetProjection: true, isRN083OrAbove: null, invertedTransformStyle: null, invertedTransformStyleHorizontal: null };
obj.isRN083OrAbove = reactNativeVersion.isRN083OrAbove();
const obj2 = { transform: null };
const items = [{ rotate: "180deg" }];
obj2.transform = items;
obj.invertedTransformStyle = obj2;
const obj3 = { transform: null };
const items1 = [{ rotate: "180deg" }];
obj3.transform = items1;
obj.invertedTransformStyleHorizontal = obj3;

export const PlatformConfig = obj;
