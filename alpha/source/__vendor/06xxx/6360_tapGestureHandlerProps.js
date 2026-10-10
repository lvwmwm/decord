// Module ID: 6360
// Function ID: 6361
// Name: tapGestureHandlerProps
// Dependencies: [6361, 6359]

// Module 6360 (tapGestureHandlerProps)
import createHandler from "createHandler" /* 6361 */;

let items1;
const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = createHandler(obj);
