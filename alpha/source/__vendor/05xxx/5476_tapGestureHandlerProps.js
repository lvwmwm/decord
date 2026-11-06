// Module ID: 5476
// Function ID: 5477
// Name: tapGestureHandlerProps
// Dependencies: [5477, 5475]

// Module 5476 (tapGestureHandlerProps)
import createHandler from "createHandler" /* 5477 */;

let items1;
const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = createHandler(obj);
