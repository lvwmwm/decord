// Module ID: 1833
// Function ID: 1834
// Name: finishScreenTransition
// Dependencies: [1834, 1838]

// Module 1833 (finishScreenTransition)
import startScreenTransition from "startScreenTransition" /* 1834 */;
import ScreenTransition from "ScreenTransition" /* 1838 */;

const startScreenTransition_export = startScreenTransition.startScreenTransition;
const ScreenTransition_export = ScreenTransition.ScreenTransition;

export const finishScreenTransition = startScreenTransition.finishScreenTransition;
export { startScreenTransition_export as startScreenTransition };
export { ScreenTransition_export as ScreenTransition };
