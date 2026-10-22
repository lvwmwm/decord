// Module ID: 5421
// Function ID: 5422
// Name: createHandler
// Dependencies: [5310, 5308]

// Module 5421 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5308 */;
import createHandler from "createHandler" /* 5310 */;

const obj = { name: "PinchGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = createHandler(obj);
