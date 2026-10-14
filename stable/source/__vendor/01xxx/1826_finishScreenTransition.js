// Module ID: 1826
// Function ID: 1827
// Name: finishScreenTransition
// Dependencies: [1827, 1831]

// Module 1826 (finishScreenTransition)
import startScreenTransition from "startScreenTransition" /* 1827 */;
import ScreenTransition from "ScreenTransition" /* 1831 */;

const startScreenTransition_export = startScreenTransition.startScreenTransition;
const ScreenTransition_export = ScreenTransition.ScreenTransition;

export const finishScreenTransition = startScreenTransition.finishScreenTransition;
export { startScreenTransition_export as startScreenTransition };
export { ScreenTransition_export as ScreenTransition };
