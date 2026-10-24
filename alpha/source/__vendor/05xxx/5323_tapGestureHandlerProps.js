// Module ID: 5323
// Function ID: 5324
// Name: tapGestureHandlerProps
// Dependencies: [5324, 5322]

// Module 5323 (tapGestureHandlerProps)
import createHandler from "createHandler" /* 5324 */;

let items1;
const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = createHandler(obj);
