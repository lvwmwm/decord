// Module ID: 5564
// Function ID: 5565
// Name: createHandler
// Dependencies: [5453, 5451]

// Module 5564 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5451 */;
import createHandler from "createHandler" /* 5453 */;

const obj = { name: "PinchGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = createHandler(obj);
