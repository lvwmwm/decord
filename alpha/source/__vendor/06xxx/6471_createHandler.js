// Module ID: 6471
// Function ID: 6472
// Name: createHandler
// Dependencies: [6360, 6358]

// Module 6471 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6358 */;
import createHandler from "createHandler" /* 6360 */;

const obj = { name: "PinchGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = createHandler(obj);
