// Module ID: 5684
// Function ID: 5685
// Name: createHandler
// Dependencies: [5562, 5560]

// Module 5684 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5560 */;
import createHandler from "createHandler" /* 5562 */;

const obj = { name: "RotationGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const rotationHandlerName = "RotationGestureHandler";
export const RotationGestureHandler = createHandler(obj);
