// Module ID: 5360
// Function ID: 5361
// Name: tapGestureHandlerProps
// Dependencies: [5361, 5359]

// Module 5360 (tapGestureHandlerProps)
import createHandler from "createHandler" /* 5361 */;

let items1;
const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = createHandler(obj);
