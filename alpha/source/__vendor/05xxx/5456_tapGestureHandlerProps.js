// Module ID: 5456
// Function ID: 5457
// Name: tapGestureHandlerProps
// Dependencies: [5457, 5455]

// Module 5456 (tapGestureHandlerProps)
import createHandler from "createHandler" /* 5457 */;

let items1;
const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = createHandler(obj);
