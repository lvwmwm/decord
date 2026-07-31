// Module ID: 9596
// Function ID: 9597
// Name: useActionSheetHeight
// Dependencies: [5248, 1474, 2]
// Exports: default

// Module 9596 (useActionSheetHeight)
import { ACTION_SHEET_START_HEIGHT_RATIO as closure_2 } from "ACTION_SHEET_START_HEIGHT_RATIO";

const result = require("set").fileFinishedImporting("modules/action_sheet/native/useActionSheetStartHeight.tsx");

export default function useActionSheetHeight() {
  return importDefault(1474)().height * closure_2;
};
