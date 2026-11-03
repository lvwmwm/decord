// Module ID: 5565
// Function ID: 5566
// Name: createHandler
// Dependencies: [5453, 5451]

// Module 5565 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5451 */;
import createHandler from "createHandler" /* 5453 */;

const obj = { name: "RotationGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const rotationHandlerName = "RotationGestureHandler";
export const RotationGestureHandler = createHandler(obj);
