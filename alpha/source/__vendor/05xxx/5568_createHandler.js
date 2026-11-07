// Module ID: 5568
// Function ID: 5569
// Name: createHandler
// Dependencies: [5447, 5445]

// Module 5568 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5445 */;
import createHandler from "createHandler" /* 5447 */;

const obj = { name: "PinchGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = createHandler(obj);
