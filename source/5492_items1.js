// Module ID: 5492
// Function ID: 5493
// Name: items1
// Dependencies: [5493, 5491]

// Module 5492 (items1)
const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: null, config: null };
const items1 = [...items];
obj[1] = items1;
obj[2] = { shouldCancelWhenOutside: true };

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = require("_isNativeReflectConstruct")(obj);
