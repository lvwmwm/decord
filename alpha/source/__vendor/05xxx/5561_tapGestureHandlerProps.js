// Module ID: 5561
// Function ID: 5562
// Name: tapGestureHandlerProps
// Dependencies: [5562, 5560]

// Module 5561 (tapGestureHandlerProps)
import createHandler from "createHandler" /* 5562 */;

let items1;
const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = createHandler(obj);
