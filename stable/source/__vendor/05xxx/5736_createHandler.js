// Module ID: 5736
// Function ID: 5737
// Name: createHandler
// Dependencies: [5615, 5613]

// Module 5736 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5613 */;
import createHandler from "createHandler" /* 5615 */;

const obj = { name: "PinchGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = createHandler(obj);
