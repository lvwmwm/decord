// Module ID: 1839
// Function ID: 1840
// Name: finishScreenTransition
// Dependencies: [1840, 1844]

// Module 1839 (finishScreenTransition)
import startScreenTransition from "startScreenTransition" /* 1840 */;
import ScreenTransition from "ScreenTransition" /* 1844 */;

const startScreenTransition_export = startScreenTransition.startScreenTransition;
const ScreenTransition_export = ScreenTransition.ScreenTransition;

export const finishScreenTransition = startScreenTransition.finishScreenTransition;
export { startScreenTransition_export as startScreenTransition };
export { ScreenTransition_export as ScreenTransition };
