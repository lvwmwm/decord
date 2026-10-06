// Module ID: 9848
// Function ID: 9849
// Name: useActionSheetStartHeight
// Dependencies: [6573, 558, 1485, 2]
// Exports: default

// Module 9848 (useActionSheetStartHeight)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1485 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6573 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2 = ActionSheetConstants.ACTION_SHEET_START_HEIGHT_RATIO;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/action_sheet/native/useActionSheetStartHeight.tsx");

export default () => useWindowDimensionsDefault().height * closure_2;
