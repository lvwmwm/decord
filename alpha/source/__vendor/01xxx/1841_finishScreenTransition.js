// Module ID: 1841
// Function ID: 1842
// Name: finishScreenTransition
// Dependencies: [1842, 1846]

// Module 1841 (finishScreenTransition)
import startScreenTransition from "startScreenTransition" /* 1842 */;
import ScreenTransition from "ScreenTransition" /* 1846 */;

const startScreenTransition_export = startScreenTransition.startScreenTransition;
const ScreenTransition_export = ScreenTransition.ScreenTransition;

export const finishScreenTransition = startScreenTransition.finishScreenTransition;
export { startScreenTransition_export as startScreenTransition };
export { ScreenTransition_export as ScreenTransition };
