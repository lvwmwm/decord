// Module ID: 1962
// Function ID: 1963
// Name: finishScreenTransition
// Dependencies: [1963, 1967]

// Module 1962 (finishScreenTransition)
import startScreenTransition from "startScreenTransition" /* 1963 */;
import presets from "presets" /* 1967 */;

const startScreenTransition_export = startScreenTransition.startScreenTransition;

export const finishScreenTransition = startScreenTransition.finishScreenTransition;
export { startScreenTransition_export as startScreenTransition };
export const ScreenTransition = presets.ScreenTransition;
