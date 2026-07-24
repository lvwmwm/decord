// Module ID: 9599
// Function ID: 74729
// Name: useActionSheetHeight
// Dependencies: [5188, 1450, 2]
// Exports: default

// Module 9599 (useActionSheetHeight)
import { ACTION_SHEET_START_HEIGHT_RATIO as closure_2 } from "ACTION_SHEET_START_HEIGHT_RATIO";

const result = require("set").fileFinishedImporting("modules/action_sheet/native/useActionSheetStartHeight.tsx");

export default function useActionSheetHeight() {
  return importDefault(1450)().height * closure_2;
};
