// Module ID: 5598
// Function ID: 5599
// Name: createHandler
// Dependencies: [5477, 5475]

// Module 5598 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5475 */;
import createHandler from "createHandler" /* 5477 */;

const obj = { name: "PinchGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = createHandler(obj);
