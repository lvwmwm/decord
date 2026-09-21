// Module ID: 10526
// Function ID: 10527
// Name: useActionSheetStartHeight
// Dependencies: [7396, 1478, 2]
// Exports: default

// Module 10526 (useActionSheetStartHeight)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1478 */;
import ActionSheetConstants from "ActionSheetConstants" /* 7396 */;
import size from "module_2" /* 2 */;

let closure_2 = ActionSheetConstants.ACTION_SHEET_START_HEIGHT_RATIO;
const result = size.fileFinishedImporting("modules/action_sheet/native/useActionSheetStartHeight.tsx");

export default function useActionSheetHeight() {
  return useWindowDimensionsDefault().height * closure_2;
};
