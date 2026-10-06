// Module ID: 6092
// Function ID: 6093
// Name: tapGestureHandlerProps
// Dependencies: [6093, 6091]

// Module 6092 (tapGestureHandlerProps)
import createHandler from "createHandler" /* 6093 */;

let items1;
const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = createHandler(obj);
