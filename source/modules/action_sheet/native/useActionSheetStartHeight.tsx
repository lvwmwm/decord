// Module ID: 10182
// Function ID: 10183
// Name: useActionSheetHeight
// Dependencies: [6951, 1494, 2]
// Exports: default

// Module 10182 (useActionSheetHeight)
import { ACTION_SHEET_START_HEIGHT_RATIO as closure_2 } from "ACTION_SHEET_START_HEIGHT_RATIO";

const result = require("set").fileFinishedImporting("modules/action_sheet/native/useActionSheetStartHeight.tsx");

export default function useActionSheetHeight() {
  return importDefault(1494)().height * closure_2;
};
