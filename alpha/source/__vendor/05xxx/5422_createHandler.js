// Module ID: 5422
// Function ID: 5423
// Name: createHandler
// Dependencies: [5310, 5308]

// Module 5422 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5308 */;
import createHandler from "createHandler" /* 5310 */;

const obj = { name: "RotationGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const rotationHandlerName = "RotationGestureHandler";
export const RotationGestureHandler = createHandler(obj);
