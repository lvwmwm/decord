// Module ID: 5199
// Function ID: 5200
// Name: tapGestureHandlerProps
// Dependencies: [5200, 5198]

// Module 5199 (tapGestureHandlerProps)
import createHandler from "createHandler" /* 5200 */;

let items1;
const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = createHandler(obj);
