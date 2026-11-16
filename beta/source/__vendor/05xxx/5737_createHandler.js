// Module ID: 5737
// Function ID: 5738
// Name: createHandler
// Dependencies: [5615, 5613]

// Module 5737 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5613 */;
import createHandler from "createHandler" /* 5615 */;

const obj = { name: "RotationGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const rotationHandlerName = "RotationGestureHandler";
export const RotationGestureHandler = createHandler(obj);
