// Module ID: 5436
// Function ID: 5437
// Name: createHandler
// Dependencies: [5324, 5322]

// Module 5436 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5322 */;
import createHandler from "createHandler" /* 5324 */;

const obj = { name: "RotationGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const rotationHandlerName = "RotationGestureHandler";
export const RotationGestureHandler = createHandler(obj);
