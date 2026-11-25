// Module ID: 5298
// Function ID: 5299
// Name: tapGestureHandlerProps
// Dependencies: [5299, 5297]

// Module 5298 (tapGestureHandlerProps)
import createHandler from "createHandler" /* 5299 */;

let items1;
const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = createHandler(obj);
