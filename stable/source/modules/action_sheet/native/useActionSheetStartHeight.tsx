// Module ID: 10381
// Function ID: 10382
// Name: useActionSheetStartHeight
// Dependencies: [5421, 1493, 2]
// Exports: default

// Module 10381 (useActionSheetStartHeight)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5421 */;
import size from "module_2" /* 2 */;

let closure_2 = ActionSheetConstants.ACTION_SHEET_START_HEIGHT_RATIO;
const result = size.fileFinishedImporting("modules/action_sheet/native/useActionSheetStartHeight.tsx");

export default function useActionSheetHeight() {
  return useWindowDimensionsDefault().height * closure_2;
};
