// Module ID: 5434
// Function ID: 5435
// Name: createHandler
// Dependencies: [5322, 5320]

// Module 5434 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5320 */;
import createHandler from "createHandler" /* 5322 */;

const obj = { name: "RotationGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const rotationHandlerName = "RotationGestureHandler";
export const RotationGestureHandler = createHandler(obj);
