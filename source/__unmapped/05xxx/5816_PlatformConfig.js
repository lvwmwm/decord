// Module ID: 5816
// Function ID: 5817
// Name: PlatformConfig
// Dependencies: [5817]

// Module 5816 (PlatformConfig)
import reactNativeVersion from "reactNativeVersion" /* 5817 */;

const obj = { defaultDrawDistance: 250, supportsOffsetCorrection: true, trackAverageRenderTimeForOffsetProjection: true, isRN083OrAbove: null, invertedTransformStyle: null, invertedTransformStyleHorizontal: null };
obj[3] = reactNativeVersion.isRN083OrAbove();
const items = [{ rotate: "180deg" }];
obj[4] = { transform: items };
const items1 = [{ rotate: "180deg" }];
obj[5] = { transform: items1 };

export const PlatformConfig = obj;
