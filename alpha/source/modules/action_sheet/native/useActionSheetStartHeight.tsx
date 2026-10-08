// Module ID: 9673
// Function ID: 9674
// Name: useActionSheetStartHeight
// Dependencies: [6830, 558, 1496, 2]
// Exports: default

// Module 9673 (useActionSheetStartHeight)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6830 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2 = ActionSheetConstants.ACTION_SHEET_START_HEIGHT_RATIO;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/action_sheet/native/useActionSheetStartHeight.tsx");

export default function useActionSheetHeight() {
  return useWindowDimensionsDefault().height * closure_2;
};
