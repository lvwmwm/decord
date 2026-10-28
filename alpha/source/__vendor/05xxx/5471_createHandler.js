// Module ID: 5471
// Function ID: 5472
// Name: createHandler
// Dependencies: [5360, 5358]

// Module 5471 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5358 */;
import createHandler from "createHandler" /* 5360 */;

const obj = { name: "PinchGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = createHandler(obj);
