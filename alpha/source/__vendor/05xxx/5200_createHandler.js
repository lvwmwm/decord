// Module ID: 5200
// Function ID: 5201
// Name: createHandler
// Dependencies: [5079, 5077]

// Module 5200 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5077 */;
import createHandler from "createHandler" /* 5079 */;

const obj = { name: "PinchGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = createHandler(obj);
