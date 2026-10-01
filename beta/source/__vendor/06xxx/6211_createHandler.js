// Module ID: 6211
// Function ID: 6212
// Name: createHandler
// Dependencies: [6100, 6098]

// Module 6211 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6098 */;
import createHandler from "createHandler" /* 6100 */;

const obj = { name: "PinchGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = createHandler(obj);
