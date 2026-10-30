// Module ID: 1834
// Function ID: 1835
// Name: finishScreenTransition
// Dependencies: [1835, 1839]

// Module 1834 (finishScreenTransition)
import startScreenTransition from "startScreenTransition" /* 1835 */;
import ScreenTransition from "ScreenTransition" /* 1839 */;

const startScreenTransition_export = startScreenTransition.startScreenTransition;
const ScreenTransition_export = ScreenTransition.ScreenTransition;

export const finishScreenTransition = startScreenTransition.finishScreenTransition;
export { startScreenTransition_export as startScreenTransition };
export { ScreenTransition_export as ScreenTransition };
