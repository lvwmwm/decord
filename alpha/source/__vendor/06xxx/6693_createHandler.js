// Module ID: 6693
// Function ID: 6694
// Name: createHandler
// Dependencies: [6582, 6580]

// Module 6693 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6580 */;
import createHandler from "createHandler" /* 6582 */;

const obj = { name: "PinchGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = createHandler(obj);
