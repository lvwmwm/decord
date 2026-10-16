// Module ID: 6583
// Function ID: 6584
// Name: tapGestureHandlerProps
// Dependencies: [6584, 6582]

// Module 6583 (tapGestureHandlerProps)
import createHandler from "createHandler" /* 6584 */;

let items1;
const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = createHandler(obj);
