// Module ID: 5747
// Function ID: 5748
// Name: createHandler
// Dependencies: [5625, 5623]

// Module 5747 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5623 */;
import createHandler from "createHandler" /* 5625 */;

const obj = { name: "RotationGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const rotationHandlerName = "RotationGestureHandler";
export const RotationGestureHandler = createHandler(obj);
