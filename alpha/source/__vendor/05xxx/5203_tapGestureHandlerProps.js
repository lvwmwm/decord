// Module ID: 5203
// Function ID: 5204
// Name: tapGestureHandlerProps
// Dependencies: [5204, 5202]

// Module 5203 (tapGestureHandlerProps)
import createHandler from "createHandler" /* 5204 */;

let items1;
const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = createHandler(obj);
