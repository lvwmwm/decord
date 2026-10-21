// Module ID: 5305
// Function ID: 5306
// Name: tapGestureHandlerProps
// Dependencies: [5306, 5304]

// Module 5305 (tapGestureHandlerProps)
import createHandler from "createHandler" /* 5306 */;

let items1;
const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = createHandler(obj);
