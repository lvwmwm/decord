// Module ID: 5232
// Function ID: 5233
// Name: createHandler
// Dependencies: [5110, 5108]

// Module 5232 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5108 */;
import createHandler from "createHandler" /* 5110 */;

const obj = { name: "RotationGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const rotationHandlerName = "RotationGestureHandler";
export const RotationGestureHandler = createHandler(obj);
