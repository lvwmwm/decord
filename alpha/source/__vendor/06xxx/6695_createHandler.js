// Module ID: 6695
// Function ID: 6696
// Name: createHandler
// Dependencies: [6584, 6582]

// Module 6695 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6582 */;
import createHandler from "createHandler" /* 6584 */;

const obj = { name: "PinchGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = createHandler(obj);
