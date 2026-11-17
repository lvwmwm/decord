// Module ID: 5740
// Function ID: 5741
// Name: createHandler
// Dependencies: [5619, 5617]

// Module 5740 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5617 */;
import createHandler from "createHandler" /* 5619 */;

const obj = { name: "PinchGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = createHandler(obj);
