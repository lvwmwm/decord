// Module ID: 5599
// Function ID: 5600
// Name: createHandler
// Dependencies: [5477, 5475]

// Module 5599 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5475 */;
import createHandler from "createHandler" /* 5477 */;

const obj = { name: "RotationGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const rotationHandlerName = "RotationGestureHandler";
export const RotationGestureHandler = createHandler(obj);
