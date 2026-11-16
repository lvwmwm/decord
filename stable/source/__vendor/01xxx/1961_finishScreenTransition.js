// Module ID: 1961
// Function ID: 1962
// Name: finishScreenTransition
// Dependencies: [1962, 1966]

// Module 1961 (finishScreenTransition)
import startScreenTransition from "startScreenTransition" /* 1962 */;
import presets from "presets" /* 1966 */;

const startScreenTransition_export = startScreenTransition.startScreenTransition;

export const finishScreenTransition = startScreenTransition.finishScreenTransition;
export { startScreenTransition_export as startScreenTransition };
export const ScreenTransition = presets.ScreenTransition;
