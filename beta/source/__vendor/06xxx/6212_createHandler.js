// Module ID: 6212
// Function ID: 6213
// Name: createHandler
// Dependencies: [6100, 6098]

// Module 6212 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6098 */;
import createHandler from "createHandler" /* 6100 */;

const obj = { name: "RotationGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const rotationHandlerName = "RotationGestureHandler";
export const RotationGestureHandler = createHandler(obj);
