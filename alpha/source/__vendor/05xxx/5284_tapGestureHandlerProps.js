// Module ID: 5284
// Function ID: 5285
// Name: tapGestureHandlerProps
// Dependencies: [5285, 5283]

// Module 5284 (tapGestureHandlerProps)
import createHandler from "createHandler" /* 5285 */;

let items1;
const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = createHandler(obj);
