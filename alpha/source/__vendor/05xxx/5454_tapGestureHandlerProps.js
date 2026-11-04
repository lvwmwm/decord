// Module ID: 5454
// Function ID: 5455
// Name: tapGestureHandlerProps
// Dependencies: [5455, 5453]

// Module 5454 (tapGestureHandlerProps)
import createHandler from "createHandler" /* 5455 */;

let items1;
const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = createHandler(obj);
