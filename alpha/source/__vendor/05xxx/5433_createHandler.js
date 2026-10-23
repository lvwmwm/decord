// Module ID: 5433
// Function ID: 5434
// Name: createHandler
// Dependencies: [5322, 5320]

// Module 5433 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5320 */;
import createHandler from "createHandler" /* 5322 */;

const obj = { name: "PinchGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = createHandler(obj);
