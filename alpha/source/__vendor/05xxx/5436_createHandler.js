// Module ID: 5436
// Function ID: 5437
// Name: createHandler
// Dependencies: [5325, 5323]

// Module 5436 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5323 */;
import createHandler from "createHandler" /* 5325 */;

const obj = { name: "PinchGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = createHandler(obj);
