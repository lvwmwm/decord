// Module ID: 10795
// Function ID: 10796
// Name: useActionSheetStartHeight
// Dependencies: [5272, 1495, 2]
// Exports: default

// Module 10795 (useActionSheetStartHeight)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1495 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5272 */;
import size from "module_2" /* 2 */;

let closure_2 = ActionSheetConstants.ACTION_SHEET_START_HEIGHT_RATIO;
const result = size.fileFinishedImporting("modules/action_sheet/native/useActionSheetStartHeight.tsx");

export default function useActionSheetHeight() {
  return useWindowDimensionsDefault().height * closure_2;
};
