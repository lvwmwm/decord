// Module ID: 6361
// Function ID: 6362
// Name: tapGestureHandlerProps
// Dependencies: [6362, 6360]

// Module 6361 (tapGestureHandlerProps)
import createHandler from "createHandler" /* 6362 */;

let items1;
const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = createHandler(obj);
