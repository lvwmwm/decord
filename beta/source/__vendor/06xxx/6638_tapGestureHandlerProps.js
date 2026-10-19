// Module ID: 6638
// Function ID: 6639
// Name: tapGestureHandlerProps
// Dependencies: [6639, 6637]

// Module 6638 (tapGestureHandlerProps)
import createHandler from "createHandler" /* 6639 */;

let items1;
const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = createHandler(obj);
