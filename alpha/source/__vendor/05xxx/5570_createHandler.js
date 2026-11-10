// Module ID: 5570
// Function ID: 5571
// Name: createHandler
// Dependencies: [5449, 5447]

// Module 5570 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5447 */;
import createHandler from "createHandler" /* 5449 */;

const obj = { name: "PinchGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = createHandler(obj);
