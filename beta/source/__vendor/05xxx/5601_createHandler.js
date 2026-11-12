// Module ID: 5601
// Function ID: 5602
// Name: createHandler
// Dependencies: [5479, 5477]

// Module 5601 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5477 */;
import createHandler from "createHandler" /* 5479 */;

const obj = { name: "RotationGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const rotationHandlerName = "RotationGestureHandler";
export const RotationGestureHandler = createHandler(obj);
