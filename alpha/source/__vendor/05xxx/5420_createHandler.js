// Module ID: 5420
// Function ID: 5421
// Name: createHandler
// Dependencies: [5299, 5297]

// Module 5420 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5297 */;
import createHandler from "createHandler" /* 5299 */;

const obj = { name: "PinchGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = createHandler(obj);
