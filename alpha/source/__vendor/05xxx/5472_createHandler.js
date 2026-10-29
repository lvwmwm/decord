// Module ID: 5472
// Function ID: 5473
// Name: createHandler
// Dependencies: [5361, 5359]

// Module 5472 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5359 */;
import createHandler from "createHandler" /* 5361 */;

const obj = { name: "PinchGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = createHandler(obj);
