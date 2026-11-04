// Module ID: 5467
// Function ID: 5468
// Name: createHandler
// Dependencies: [5356, 5354]

// Module 5467 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5354 */;
import createHandler from "createHandler" /* 5356 */;

const obj = { name: "PinchGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = createHandler(obj);
