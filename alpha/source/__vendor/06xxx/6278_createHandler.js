// Module ID: 6278
// Function ID: 6279
// Name: createHandler
// Dependencies: [6167, 6165]

// Module 6278 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6165 */;
import createHandler from "createHandler" /* 6167 */;

const obj = { name: "PinchGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = createHandler(obj);
