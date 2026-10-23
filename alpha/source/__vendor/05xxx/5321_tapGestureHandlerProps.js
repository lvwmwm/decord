// Module ID: 5321
// Function ID: 5322
// Name: tapGestureHandlerProps
// Dependencies: [5322, 5320]

// Module 5321 (tapGestureHandlerProps)
import createHandler from "createHandler" /* 5322 */;

let items1;
const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = createHandler(obj);
