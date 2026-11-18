// Module ID: 5109
// Function ID: 5110
// Name: tapGestureHandlerProps
// Dependencies: [5110, 5108]

// Module 5109 (tapGestureHandlerProps)
import createHandler from "createHandler" /* 5110 */;

let items1;
const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = createHandler(obj);
