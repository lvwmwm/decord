// Module ID: 5618
// Function ID: 5619
// Name: tapGestureHandlerProps
// Dependencies: [5619, 5617]

// Module 5618 (tapGestureHandlerProps)
import createHandler from "createHandler" /* 5619 */;

let items1;
const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = createHandler(obj);
