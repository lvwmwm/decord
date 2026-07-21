// Module ID: 9555
// Function ID: 74464
// Name: useActionSheetHeight
// Dependencies: []
// Exports: default

// Module 9555 (useActionSheetHeight)
let closure_2 = require(dependencyMap[0]).ACTION_SHEET_START_HEIGHT_RATIO;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/action_sheet/native/useActionSheetStartHeight.tsx");

export default function useActionSheetHeight() {
  return importDefault(dependencyMap[1])().height * closure_2;
};
