// Module ID: 5683
// Function ID: 5684
// Name: createHandler
// Dependencies: [5562, 5560]

// Module 5683 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5560 */;
import createHandler from "createHandler" /* 5562 */;

const obj = { name: "PinchGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = createHandler(obj);
