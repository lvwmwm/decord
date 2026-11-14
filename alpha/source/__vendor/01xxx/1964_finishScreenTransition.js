// Module ID: 1964
// Function ID: 1965
// Name: finishScreenTransition
// Dependencies: [1965, 1969]

// Module 1964 (finishScreenTransition)
import startScreenTransition from "startScreenTransition" /* 1965 */;
import presets from "presets" /* 1969 */;

const startScreenTransition_export = startScreenTransition.startScreenTransition;

export const finishScreenTransition = startScreenTransition.finishScreenTransition;
export { startScreenTransition_export as startScreenTransition };
export const ScreenTransition = presets.ScreenTransition;
