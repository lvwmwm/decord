// Module ID: 5579
// Function ID: 5580
// Name: createHandler
// Dependencies: [5457, 5455]

// Module 5579 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5455 */;
import createHandler from "createHandler" /* 5457 */;

const obj = { name: "RotationGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const rotationHandlerName = "RotationGestureHandler";
export const RotationGestureHandler = createHandler(obj);
