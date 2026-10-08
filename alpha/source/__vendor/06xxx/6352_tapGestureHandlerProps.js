// Module ID: 6352
// Function ID: 6353
// Name: tapGestureHandlerProps
// Dependencies: [6353, 6351]

// Module 6352 (tapGestureHandlerProps)
import createHandler from "createHandler" /* 6353 */;

let items1;
const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = createHandler(obj);
