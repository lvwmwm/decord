// Module ID: 5080
// Function ID: 5081
// Name: tapGestureHandlerProps
// Dependencies: [5081, 5079]

// Module 5080 (tapGestureHandlerProps)
import createHandler from "createHandler" /* 5081 */;

let items1;
const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = createHandler(obj);
