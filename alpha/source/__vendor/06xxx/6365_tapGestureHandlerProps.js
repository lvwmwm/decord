// Module ID: 6365
// Function ID: 6366
// Name: tapGestureHandlerProps
// Dependencies: [6366, 6364]

// Module 6365 (tapGestureHandlerProps)
import createHandler from "createHandler" /* 6366 */;

let items1;
const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = createHandler(obj);
