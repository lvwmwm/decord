// Module ID: 5624
// Function ID: 5625
// Name: tapGestureHandlerProps
// Dependencies: [5625, 5623]

// Module 5624 (tapGestureHandlerProps)
import createHandler from "createHandler" /* 5625 */;

let items1;
const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = createHandler(obj);
