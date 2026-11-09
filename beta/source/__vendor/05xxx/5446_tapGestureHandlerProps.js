// Module ID: 5446
// Function ID: 5447
// Name: tapGestureHandlerProps
// Dependencies: [5447, 5445]

// Module 5446 (tapGestureHandlerProps)
import createHandler from "createHandler" /* 5447 */;

let items1;
const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = createHandler(obj);
