// Module ID: 5280
// Function ID: 5281
// Name: PlatformConfig
// Dependencies: [5281]

// Module 5280 (PlatformConfig)
import react_native from "react-native" /* 5281 */;

let items;
let items1;
let obj2;
let obj3;
const obj = { defaultDrawDistance: 250, supportsOffsetCorrection: true, trackAverageRenderTimeForOffsetProjection: true, isRN083OrAbove: react_native.isRN083OrAbove(), invertedTransformStyle: obj2, invertedTransformStyleHorizontal: obj3 };
obj2 = { transform: items };
items = [{ rotate: "180deg" }];
obj3 = { transform: items1 };
items1 = [{ rotate: "180deg" }];

export const PlatformConfig = obj;
