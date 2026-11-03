// Module ID: 5452
// Function ID: 5453
// Name: tapGestureHandlerProps
// Dependencies: [5453, 5451]

// Module 5452 (tapGestureHandlerProps)
import createHandler from "createHandler" /* 5453 */;

let items1;
const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = createHandler(obj);
