// Module ID: 5441
// Function ID: 5442
// Name: createHandler
// Dependencies: [5330, 5328]

// Module 5441 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5328 */;
import createHandler from "createHandler" /* 5330 */;

const obj = { name: "PinchGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = createHandler(obj);
