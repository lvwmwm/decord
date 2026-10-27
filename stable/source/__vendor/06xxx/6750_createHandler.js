// Module ID: 6750
// Function ID: 6751
// Name: createHandler
// Dependencies: [6639, 6637]

// Module 6750 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6637 */;
import createHandler from "createHandler" /* 6639 */;

const obj = { name: "PinchGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = createHandler(obj);
