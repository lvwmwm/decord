// Module ID: 5741
// Function ID: 5742
// Name: createHandler
// Dependencies: [5619, 5617]

// Module 5741 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5617 */;
import createHandler from "createHandler" /* 5619 */;

const obj = { name: "RotationGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const rotationHandlerName = "RotationGestureHandler";
export const RotationGestureHandler = createHandler(obj);
