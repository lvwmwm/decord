// Module ID: 9940
// Function ID: 9941
// Name: useActionSheetStartHeight
// Dependencies: [7062, 558, 1497, 2]
// Exports: default

// Module 9940 (useActionSheetStartHeight)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1497 */;
import ActionSheetConstants from "ActionSheetConstants" /* 7062 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2 = ActionSheetConstants.ACTION_SHEET_START_HEIGHT_RATIO;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/action_sheet/native/useActionSheetStartHeight.tsx");

export default function useActionSheetHeight() {
  return useWindowDimensionsDefault().height * closure_2;
};
