// Module ID: 1827
// Function ID: 1828
// Name: finishScreenTransition
// Dependencies: [1828, 1832]

// Module 1827 (finishScreenTransition)
import startScreenTransition from "startScreenTransition" /* 1828 */;
import ScreenTransition from "ScreenTransition" /* 1832 */;

const startScreenTransition_export = startScreenTransition.startScreenTransition;
const ScreenTransition_export = ScreenTransition.ScreenTransition;

export const finishScreenTransition = startScreenTransition.finishScreenTransition;
export { startScreenTransition_export as startScreenTransition };
export { ScreenTransition_export as ScreenTransition };
