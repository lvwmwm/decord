// Module ID: 5321
// Function ID: 5322
// Name: createHandler
// Dependencies: [5200, 5198]

// Module 5321 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5198 */;
import createHandler from "createHandler" /* 5200 */;

const obj = { name: "PinchGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = createHandler(obj);
