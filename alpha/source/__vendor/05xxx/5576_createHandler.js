// Module ID: 5576
// Function ID: 5577
// Name: createHandler
// Dependencies: [5455, 5453]

// Module 5576 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5453 */;
import createHandler from "createHandler" /* 5455 */;

const obj = { name: "PinchGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = createHandler(obj);
