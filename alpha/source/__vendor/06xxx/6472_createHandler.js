// Module ID: 6472
// Function ID: 6473
// Name: createHandler
// Dependencies: [6361, 6359]

// Module 6472 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6359 */;
import createHandler from "createHandler" /* 6361 */;

const obj = { name: "PinchGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = createHandler(obj);
