// Module ID: 5435
// Function ID: 5436
// Name: createHandler
// Dependencies: [5324, 5322]

// Module 5435 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5322 */;
import createHandler from "createHandler" /* 5324 */;

const obj = { name: "PinchGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = createHandler(obj);
