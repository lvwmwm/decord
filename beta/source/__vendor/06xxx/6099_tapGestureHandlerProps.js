// Module ID: 6099
// Function ID: 6100
// Name: tapGestureHandlerProps
// Dependencies: [6100, 6098]

// Module 6099 (tapGestureHandlerProps)
import createHandler from "createHandler" /* 6100 */;

let items1;
const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = createHandler(obj);
