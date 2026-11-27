// Module ID: 10796
// Function ID: 10797
// Name: useActionSheetStartHeight
// Dependencies: [5272, 1495, 2]
// Exports: default

// Module 10796 (useActionSheetStartHeight)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1495 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5272 */;
import size from "module_2" /* 2 */;

let closure_2 = ActionSheetConstants.ACTION_SHEET_START_HEIGHT_RATIO;
const result = size.fileFinishedImporting("modules/action_sheet/native/useActionSheetStartHeight.tsx");

export default function useActionSheetHeight() {
  return useWindowDimensionsDefault().height * closure_2;
};
