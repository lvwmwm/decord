// Module ID: 6205
// Function ID: 6206
// Name: createHandler
// Dependencies: [6093, 6091]

// Module 6205 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6091 */;
import createHandler from "createHandler" /* 6093 */;

const obj = { name: "RotationGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const rotationHandlerName = "RotationGestureHandler";
export const RotationGestureHandler = createHandler(obj);
