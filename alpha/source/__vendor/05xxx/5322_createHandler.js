// Module ID: 5322
// Function ID: 5323
// Name: createHandler
// Dependencies: [5200, 5198]

// Module 5322 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5198 */;
import createHandler from "createHandler" /* 5200 */;

const obj = { name: "RotationGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const rotationHandlerName = "RotationGestureHandler";
export const RotationGestureHandler = createHandler(obj);
