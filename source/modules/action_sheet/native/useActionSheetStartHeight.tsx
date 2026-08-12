// Module ID: 9968
// Function ID: 9969
// Name: useActionSheetHeight
// Dependencies: [5437, 1493, 2]
// Exports: default

// Module 9968 (useActionSheetHeight)
import { ACTION_SHEET_START_HEIGHT_RATIO as closure_2 } from "ACTION_SHEET_START_HEIGHT_RATIO";

const result = require("set").fileFinishedImporting("modules/action_sheet/native/useActionSheetStartHeight.tsx");

export default function useActionSheetHeight() {
  return importDefault(1493)().height * closure_2;
};
