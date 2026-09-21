// Module ID: 10645
// Function ID: 10646
// Name: useActionSheetStartHeight
// Dependencies: [7398, 558, 1482, 2]
// Exports: default

// Module 10645 (useActionSheetStartHeight)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1482 */;
import ActionSheetConstants from "ActionSheetConstants" /* 7398 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2 = ActionSheetConstants.ACTION_SHEET_START_HEIGHT_RATIO;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/action_sheet/native/useActionSheetStartHeight.tsx");

export default () => useWindowDimensionsDefault().height * closure_2;
