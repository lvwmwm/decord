// Module ID: 6697
// Function ID: 6698
// Name: createHandler
// Dependencies: [6586, 6584]

// Module 6697 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6584 */;
import createHandler from "createHandler" /* 6586 */;

const obj = { name: "PinchGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = createHandler(obj);
