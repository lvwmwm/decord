// Module ID: 5396
// Function ID: 5397
// Name: createHandler
// Dependencies: [5285, 5283]

// Module 5396 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5283 */;
import createHandler from "createHandler" /* 5285 */;

const obj = { name: "PinchGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = createHandler(obj);
