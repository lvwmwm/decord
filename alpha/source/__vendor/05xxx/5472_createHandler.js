// Module ID: 5472
// Function ID: 5473
// Name: createHandler
// Dependencies: [5360, 5358]

// Module 5472 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5358 */;
import createHandler from "createHandler" /* 5360 */;

const obj = { name: "RotationGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const rotationHandlerName = "RotationGestureHandler";
export const RotationGestureHandler = createHandler(obj);
