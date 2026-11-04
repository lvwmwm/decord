// Module ID: 5468
// Function ID: 5469
// Name: createHandler
// Dependencies: [5356, 5354]

// Module 5468 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5354 */;
import createHandler from "createHandler" /* 5356 */;

const obj = { name: "RotationGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const rotationHandlerName = "RotationGestureHandler";
export const RotationGestureHandler = createHandler(obj);
