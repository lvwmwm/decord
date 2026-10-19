// Module ID: 6751
// Function ID: 6752
// Name: createHandler
// Dependencies: [6639, 6637]

// Module 6751 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6637 */;
import createHandler from "createHandler" /* 6639 */;

const obj = { name: "RotationGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const rotationHandlerName = "RotationGestureHandler";
export const RotationGestureHandler = createHandler(obj);
