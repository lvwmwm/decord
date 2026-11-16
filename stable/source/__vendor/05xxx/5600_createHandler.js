// Module ID: 5600
// Function ID: 5601
// Name: createHandler
// Dependencies: [5479, 5477]

// Module 5600 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5477 */;
import createHandler from "createHandler" /* 5479 */;

const obj = { name: "PinchGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = createHandler(obj);
