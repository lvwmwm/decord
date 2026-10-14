// Module ID: 6477
// Function ID: 6478
// Name: createHandler
// Dependencies: [6366, 6364]

// Module 6477 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6364 */;
import createHandler from "createHandler" /* 6366 */;

const obj = { name: "PinchGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = createHandler(obj);
