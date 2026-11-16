// Module ID: 5478
// Function ID: 5479
// Name: tapGestureHandlerProps
// Dependencies: [5479, 5477]

// Module 5478 (tapGestureHandlerProps)
import createHandler from "createHandler" /* 5479 */;

let items1;
const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = createHandler(obj);
