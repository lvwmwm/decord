// Module ID: 5231
// Function ID: 5232
// Name: createHandler
// Dependencies: [5110, 5108]

// Module 5231 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5108 */;
import createHandler from "createHandler" /* 5110 */;

const obj = { name: "PinchGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = createHandler(obj);
