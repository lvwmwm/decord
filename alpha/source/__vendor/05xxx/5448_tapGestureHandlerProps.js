// Module ID: 5448
// Function ID: 5449
// Name: tapGestureHandlerProps
// Dependencies: [5449, 5447]

// Module 5448 (tapGestureHandlerProps)
import createHandler from "createHandler" /* 5449 */;

let items1;
const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = createHandler(obj);
