// Module ID: 5359
// Function ID: 5360
// Name: tapGestureHandlerProps
// Dependencies: [5360, 5358]

// Module 5359 (tapGestureHandlerProps)
import createHandler from "createHandler" /* 5360 */;

let items1;
const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = createHandler(obj);
