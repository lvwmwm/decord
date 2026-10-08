// Module ID: 6464
// Function ID: 6465
// Name: createHandler
// Dependencies: [6353, 6351]

// Module 6464 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6351 */;
import createHandler from "createHandler" /* 6353 */;

const obj = { name: "PinchGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = createHandler(obj);
