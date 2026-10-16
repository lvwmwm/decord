// Module ID: 6585
// Function ID: 6586
// Name: tapGestureHandlerProps
// Dependencies: [6586, 6584]

// Module 6585 (tapGestureHandlerProps)
import createHandler from "createHandler" /* 6586 */;

let items1;
const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = createHandler(obj);
