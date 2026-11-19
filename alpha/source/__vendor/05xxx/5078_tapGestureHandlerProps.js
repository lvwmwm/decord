// Module ID: 5078
// Function ID: 5079
// Name: tapGestureHandlerProps
// Dependencies: [5079, 5077]

// Module 5078 (tapGestureHandlerProps)
import createHandler from "createHandler" /* 5079 */;

let items1;
const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = createHandler(obj);
