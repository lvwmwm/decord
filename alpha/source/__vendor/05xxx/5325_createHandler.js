// Module ID: 5325
// Function ID: 5326
// Name: createHandler
// Dependencies: [5204, 5202]

// Module 5325 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5202 */;
import createHandler from "createHandler" /* 5204 */;

const obj = { name: "PinchGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = createHandler(obj);
