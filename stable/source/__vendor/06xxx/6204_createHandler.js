// Module ID: 6204
// Function ID: 6205
// Name: createHandler
// Dependencies: [6093, 6091]

// Module 6204 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6091 */;
import createHandler from "createHandler" /* 6093 */;

const obj = { name: "PinchGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = createHandler(obj);
