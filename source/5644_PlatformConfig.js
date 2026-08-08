// Module ID: 5644
// Function ID: 5645
// Name: PlatformConfig
// Dependencies: [5645]

// Module 5644 (PlatformConfig)
import reactNativeVersion from "reactNativeVersion";

const obj = { defaultDrawDistance: 250, supportsOffsetCorrection: true, trackAverageRenderTimeForOffsetProjection: true, isRN083OrAbove: null, invertedTransformStyle: null, invertedTransformStyleHorizontal: null };
obj[3] = reactNativeVersion.isRN083OrAbove();
const items = [{ rotate: "180deg" }];
obj[4] = { transform: items };
const items1 = [{ rotate: "180deg" }];
obj[5] = { transform: items1 };

export const PlatformConfig = obj;
