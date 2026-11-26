// Module ID: 5614
// Function ID: 5615
// Name: tapGestureHandlerProps
// Dependencies: [5615, 5613]

// Module 5614 (tapGestureHandlerProps)
import createHandler from "createHandler" /* 5615 */;

let items1;
const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = createHandler(obj);
