// Module ID: 5201
// Function ID: 5202
// Name: createHandler
// Dependencies: [5079, 5077]

// Module 5201 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5077 */;
import createHandler from "createHandler" /* 5079 */;

const obj = { name: "RotationGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const rotationHandlerName = "RotationGestureHandler";
export const RotationGestureHandler = createHandler(obj);
