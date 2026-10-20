// Module ID: 6473
// Function ID: 6474
// Name: createHandler
// Dependencies: [6362, 6360]

// Module 6473 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6360 */;
import createHandler from "createHandler" /* 6362 */;

const obj = { name: "PinchGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = createHandler(obj);
