// Module ID: 5203
// Function ID: 5204
// Name: createHandler
// Dependencies: [5081, 5079]

// Module 5203 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5079 */;
import createHandler from "createHandler" /* 5081 */;

const obj = { name: "RotationGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const rotationHandlerName = "RotationGestureHandler";
export const RotationGestureHandler = createHandler(obj);
