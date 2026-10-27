// Module ID: 5324
// Function ID: 5325
// Name: tapGestureHandlerProps
// Dependencies: [5325, 5323]

// Module 5324 (tapGestureHandlerProps)
import createHandler from "createHandler" /* 5325 */;

let items1;
const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = createHandler(obj);
