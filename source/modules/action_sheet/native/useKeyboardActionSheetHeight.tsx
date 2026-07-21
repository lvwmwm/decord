// Module ID: 11145
// Function ID: 86657
// Name: computeKeyboardActionSheetHeight
// Dependencies: []
// Exports: default, getKeyboardActionSheetHeight

// Module 11145 (computeKeyboardActionSheetHeight)
function computeKeyboardActionSheetHeight(safeAreaInsets, windowDimensions, customKeyboardHeight) {
  let diff = windowDimensions.height - require(dependencyMap[0]).NAV_BAR_HEIGHT_MULTILINE - safeAreaInsets.top;
  if (customKeyboardHeight >= diff) {
    diff = customKeyboardHeight;
  }
  const obj = { minimum: customKeyboardHeight, maximum: diff };
  return obj;
}
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/action_sheet/native/useKeyboardActionSheetHeight.tsx");

export default function useKeyboardActionSheetHeight() {
  const tmp = importDefault(dependencyMap[1])();
  return computeKeyboardActionSheetHeight(tmp, importDefault(dependencyMap[2])({ ignoreKeyboard: true }), importDefault(dependencyMap[3])());
};
export const getKeyboardActionSheetHeight = function getKeyboardActionSheetHeight() {
  const safeAreaInsets = require(dependencyMap[1]).getSafeAreaInsets();
  const obj = require(dependencyMap[1]);
  const windowDimensions = require(dependencyMap[2]).getWindowDimensions({ ignoreKeyboard: true });
  const obj2 = require(dependencyMap[2]);
  return computeKeyboardActionSheetHeight(safeAreaInsets, windowDimensions, require(dependencyMap[3]).getCustomKeyboardHeight());
};
