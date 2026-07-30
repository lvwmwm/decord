// Module ID: 9581
// Function ID: 9582
// Name: useActionSheetHeight
// Dependencies: [5244, 1474, 2]
// Exports: default

// Module 9581 (useActionSheetHeight)
import { ACTION_SHEET_START_HEIGHT_RATIO as closure_2 } from "ACTION_SHEET_START_HEIGHT_RATIO";

const result = require("set").fileFinishedImporting("modules/action_sheet/native/useActionSheetStartHeight.tsx");

export default function useActionSheetHeight() {
  return importDefault(1474)().height * closure_2;
};
