// Module ID: 5452
// Function ID: 5453
// Name: createHandler
// Dependencies: [5330, 5328]

// Module 5452 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5328 */;
import createHandler from "createHandler" /* 5330 */;

const obj = { name: "RotationGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const rotationHandlerName = "RotationGestureHandler";
export const RotationGestureHandler = createHandler(obj);
