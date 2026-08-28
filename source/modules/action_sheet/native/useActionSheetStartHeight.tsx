// Module ID: 10282
// Function ID: 10283
// Name: useActionSheetHeight
// Dependencies: [5588, 1494, 2]
// Exports: default

// Module 10282 (useActionSheetHeight)
import set from "set" /* 2 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1494 */;
import ACTION_SHEET_START_HEIGHT_RATIO from "ACTION_SHEET_START_HEIGHT_RATIO" /* 5588 */;

let closure_2 = ACTION_SHEET_START_HEIGHT_RATIO.ACTION_SHEET_START_HEIGHT_RATIO;
const result = set.fileFinishedImporting("modules/action_sheet/native/useActionSheetStartHeight.tsx");

export default function useActionSheetHeight() {
  return useWindowDimensionsDefault().height * closure_2;
};
