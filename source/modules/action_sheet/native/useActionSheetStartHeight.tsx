// Module ID: 9977
// Function ID: 9978
// Name: useActionSheetHeight
// Dependencies: [5459, 1493, 2]
// Exports: default

// Module 9977 (useActionSheetHeight)
import { ACTION_SHEET_START_HEIGHT_RATIO as closure_2 } from "ACTION_SHEET_START_HEIGHT_RATIO";

const result = require("set").fileFinishedImporting("modules/action_sheet/native/useActionSheetStartHeight.tsx");

export default function useActionSheetHeight() {
  return importDefault(1493)().height * closure_2;
};
