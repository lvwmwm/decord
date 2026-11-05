// Module ID: 10414
// Function ID: 10415
// Name: useActionSheetStartHeight
// Dependencies: [5399, 1493, 2]
// Exports: default

// Module 10414 (useActionSheetStartHeight)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5399 */;
import size from "module_2" /* 2 */;

let closure_2 = ActionSheetConstants.ACTION_SHEET_START_HEIGHT_RATIO;
const result = size.fileFinishedImporting("modules/action_sheet/native/useActionSheetStartHeight.tsx");

export default function useActionSheetHeight() {
  return useWindowDimensionsDefault().height * closure_2;
};
