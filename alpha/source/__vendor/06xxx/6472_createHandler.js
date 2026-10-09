// Module ID: 6472
// Function ID: 6473
// Name: createHandler
// Dependencies: [6360, 6358]

// Module 6472 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6358 */;
import createHandler from "createHandler" /* 6360 */;

const obj = { name: "RotationGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const rotationHandlerName = "RotationGestureHandler";
export const RotationGestureHandler = createHandler(obj);
