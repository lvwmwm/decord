// Module ID: 5355
// Function ID: 5356
// Name: tapGestureHandlerProps
// Dependencies: [5356, 5354]

// Module 5355 (tapGestureHandlerProps)
import createHandler from "createHandler" /* 5356 */;

let items1;
const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = createHandler(obj);
