// Module ID: 6279
// Function ID: 6280
// Name: createHandler
// Dependencies: [6167, 6165]

// Module 6279 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6165 */;
import createHandler from "createHandler" /* 6167 */;

const obj = { name: "RotationGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const rotationHandlerName = "RotationGestureHandler";
export const RotationGestureHandler = createHandler(obj);
