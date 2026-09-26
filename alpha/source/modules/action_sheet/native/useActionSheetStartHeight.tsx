// Module ID: 9731
// Function ID: 9732
// Name: useActionSheetStartHeight
// Dependencies: [6572, 1479, 2]
// Exports: default

// Module 9731 (useActionSheetStartHeight)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1479 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6572 */;
import size from "module_2" /* 2 */;

let closure_2 = ActionSheetConstants.ACTION_SHEET_START_HEIGHT_RATIO;
const result = size.fileFinishedImporting("modules/action_sheet/native/useActionSheetStartHeight.tsx");

export default function useActionSheetHeight() {
  return useWindowDimensionsDefault().height * closure_2;
};
