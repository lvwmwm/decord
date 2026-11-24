// Module ID: 5326
// Function ID: 5327
// Name: createHandler
// Dependencies: [5204, 5202]

// Module 5326 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5202 */;
import createHandler from "createHandler" /* 5204 */;

const obj = { name: "RotationGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const rotationHandlerName = "RotationGestureHandler";
export const RotationGestureHandler = createHandler(obj);
