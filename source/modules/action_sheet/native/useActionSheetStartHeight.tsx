// Module ID: 10306
// Function ID: 10307
// Name: useActionSheetHeight
// Dependencies: [5591, 1493, 2]
// Exports: default

// Module 10306 (useActionSheetHeight)
import set from "set" /* 2 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import ACTION_SHEET_START_HEIGHT_RATIO from "ACTION_SHEET_START_HEIGHT_RATIO" /* 5591 */;

let closure_2 = ACTION_SHEET_START_HEIGHT_RATIO.ACTION_SHEET_START_HEIGHT_RATIO;
const result = set.fileFinishedImporting("modules/action_sheet/native/useActionSheetStartHeight.tsx");

export default function useActionSheetHeight() {
  return useWindowDimensionsDefault().height * closure_2;
};
