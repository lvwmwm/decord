// Module ID: 5569
// Function ID: 5570
// Name: createHandler
// Dependencies: [5447, 5445]

// Module 5569 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5445 */;
import createHandler from "createHandler" /* 5447 */;

const obj = { name: "RotationGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const rotationHandlerName = "RotationGestureHandler";
export const RotationGestureHandler = createHandler(obj);
