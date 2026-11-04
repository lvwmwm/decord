// Module ID: 5577
// Function ID: 5578
// Name: createHandler
// Dependencies: [5455, 5453]

// Module 5577 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5453 */;
import createHandler from "createHandler" /* 5455 */;

const obj = { name: "RotationGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const rotationHandlerName = "RotationGestureHandler";
export const RotationGestureHandler = createHandler(obj);
