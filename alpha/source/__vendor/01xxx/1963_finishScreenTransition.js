// Module ID: 1963
// Function ID: 1964
// Name: finishScreenTransition
// Dependencies: [1964, 1968]

// Module 1963 (finishScreenTransition)
import startScreenTransition from "startScreenTransition" /* 1964 */;
import presets from "presets" /* 1968 */;

const startScreenTransition_export = startScreenTransition.startScreenTransition;

export const finishScreenTransition = startScreenTransition.finishScreenTransition;
export { startScreenTransition_export as startScreenTransition };
export const ScreenTransition = presets.ScreenTransition;
