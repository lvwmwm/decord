// Module ID: 5473
// Function ID: 5474
// Name: createHandler
// Dependencies: [5361, 5359]

// Module 5473 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5359 */;
import createHandler from "createHandler" /* 5361 */;

const obj = { name: "RotationGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const rotationHandlerName = "RotationGestureHandler";
export const RotationGestureHandler = createHandler(obj);
