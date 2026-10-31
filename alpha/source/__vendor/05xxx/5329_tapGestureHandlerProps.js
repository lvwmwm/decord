// Module ID: 5329
// Function ID: 5330
// Name: tapGestureHandlerProps
// Dependencies: [5330, 5328]

// Module 5329 (tapGestureHandlerProps)
import createHandler from "createHandler" /* 5330 */;

let items1;
const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = createHandler(obj);
