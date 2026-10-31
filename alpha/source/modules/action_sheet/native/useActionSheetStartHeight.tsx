// Module ID: 10230
// Function ID: 10231
// Name: useActionSheetStartHeight
// Dependencies: [5273, 1491, 2]
// Exports: default

// Module 10230 (useActionSheetStartHeight)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1491 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5273 */;
import size from "module_2" /* 2 */;

let closure_2 = ActionSheetConstants.ACTION_SHEET_START_HEIGHT_RATIO;
const result = size.fileFinishedImporting("modules/action_sheet/native/useActionSheetStartHeight.tsx");

export default function useActionSheetHeight() {
  return useWindowDimensionsDefault().height * closure_2;
};
