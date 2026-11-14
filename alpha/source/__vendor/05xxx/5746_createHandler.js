// Module ID: 5746
// Function ID: 5747
// Name: createHandler
// Dependencies: [5625, 5623]

// Module 5746 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5623 */;
import createHandler from "createHandler" /* 5625 */;

const obj = { name: "PinchGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = createHandler(obj);
