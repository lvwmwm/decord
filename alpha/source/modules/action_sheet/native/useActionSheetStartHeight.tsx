// Module ID: 9932
// Function ID: 9933
// Name: useActionSheetStartHeight
// Dependencies: [6768, 1479, 2]
// Exports: default

// Module 9932 (useActionSheetStartHeight)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1479 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6768 */;
import size from "module_2" /* 2 */;

let closure_2 = ActionSheetConstants.ACTION_SHEET_START_HEIGHT_RATIO;
const result = size.fileFinishedImporting("modules/action_sheet/native/useActionSheetStartHeight.tsx");

export default function useActionSheetHeight() {
  return useWindowDimensionsDefault().height * closure_2;
};
