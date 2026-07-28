// Module ID: 5409
// Function ID: 46183
// Name: PlatformConfig
// Dependencies: [5410]

// Module 5409 (PlatformConfig)
import reactNativeVersion from "reactNativeVersion";

const obj = { defaultDrawDistance: 250, supportsOffsetCorrection: true, trackAverageRenderTimeForOffsetProjection: true };
obj.isRN083OrAbove = reactNativeVersion.isRN083OrAbove();
const items = [{ rotate: "180deg" }];
obj.invertedTransformStyle = { transform: items };
const items1 = [{ rotate: "180deg" }];
obj.invertedTransformStyleHorizontal = { transform: items1 };

export const PlatformConfig = obj;
