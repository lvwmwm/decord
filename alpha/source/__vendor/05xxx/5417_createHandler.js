// Module ID: 5417
// Function ID: 5418
// Name: createHandler
// Dependencies: [5306, 5304]

// Module 5417 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5304 */;
import createHandler from "createHandler" /* 5306 */;

const obj = { name: "PinchGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = createHandler(obj);
