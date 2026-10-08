// Module ID: 1838
// Function ID: 1839
// Name: finishScreenTransition
// Dependencies: [1839, 1843]

// Module 1838 (finishScreenTransition)
import startScreenTransition from "startScreenTransition" /* 1839 */;
import ScreenTransition from "ScreenTransition" /* 1843 */;

const startScreenTransition_export = startScreenTransition.startScreenTransition;
const ScreenTransition_export = ScreenTransition.ScreenTransition;

export const finishScreenTransition = startScreenTransition.finishScreenTransition;
export { startScreenTransition_export as startScreenTransition };
export { ScreenTransition_export as ScreenTransition };
