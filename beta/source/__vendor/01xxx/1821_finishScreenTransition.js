// Module ID: 1821
// Function ID: 1822
// Name: finishScreenTransition
// Dependencies: [1822, 1826]

// Module 1821 (finishScreenTransition)
import startScreenTransition from "startScreenTransition" /* 1822 */;
import ScreenTransition from "ScreenTransition" /* 1826 */;

const startScreenTransition_export = startScreenTransition.startScreenTransition;
const ScreenTransition_export = ScreenTransition.ScreenTransition;

export const finishScreenTransition = startScreenTransition.finishScreenTransition;
export { startScreenTransition_export as startScreenTransition };
export { ScreenTransition_export as ScreenTransition };
