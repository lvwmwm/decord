// Module ID: 9808
// Function ID: 9809
// Name: useActionSheetHeight
// Dependencies: [5324, 1474, 2]
// Exports: default

// Module 9808 (useActionSheetHeight)
import { ACTION_SHEET_START_HEIGHT_RATIO as closure_2 } from "ACTION_SHEET_START_HEIGHT_RATIO";

const result = require("set").fileFinishedImporting("modules/action_sheet/native/useActionSheetStartHeight.tsx");

export default function useActionSheetHeight() {
  return importDefault(1474)().height * closure_2;
};
