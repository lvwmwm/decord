// Module ID: 5578
// Function ID: 5579
// Name: createHandler
// Dependencies: [5457, 5455]

// Module 5578 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5455 */;
import createHandler from "createHandler" /* 5457 */;

const obj = { name: "PinchGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = createHandler(obj);
