// Module ID: 5421
// Function ID: 5422
// Name: createHandler
// Dependencies: [5299, 5297]

// Module 5421 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5297 */;
import createHandler from "createHandler" /* 5299 */;

const obj = { name: "RotationGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const rotationHandlerName = "RotationGestureHandler";
export const RotationGestureHandler = createHandler(obj);
