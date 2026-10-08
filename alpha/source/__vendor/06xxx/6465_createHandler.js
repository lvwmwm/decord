// Module ID: 6465
// Function ID: 6466
// Name: createHandler
// Dependencies: [6353, 6351]

// Module 6465 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6351 */;
import createHandler from "createHandler" /* 6353 */;

const obj = { name: "RotationGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const rotationHandlerName = "RotationGestureHandler";
export const RotationGestureHandler = createHandler(obj);
