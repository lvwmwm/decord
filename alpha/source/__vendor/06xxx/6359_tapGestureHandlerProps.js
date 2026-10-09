// Module ID: 6359
// Function ID: 6360
// Name: tapGestureHandlerProps
// Dependencies: [6360, 6358]

// Module 6359 (tapGestureHandlerProps)
import createHandler from "createHandler" /* 6360 */;

let items1;
const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = createHandler(obj);
