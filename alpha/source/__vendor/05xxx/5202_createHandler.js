// Module ID: 5202
// Function ID: 5203
// Name: createHandler
// Dependencies: [5081, 5079]

// Module 5202 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5079 */;
import createHandler from "createHandler" /* 5081 */;

const obj = { name: "PinchGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = createHandler(obj);
