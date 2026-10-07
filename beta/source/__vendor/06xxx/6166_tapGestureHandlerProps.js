// Module ID: 6166
// Function ID: 6167
// Name: tapGestureHandlerProps
// Dependencies: [6167, 6165]

// Module 6166 (tapGestureHandlerProps)
import createHandler from "createHandler" /* 6167 */;

let items1;
const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = createHandler(obj);
