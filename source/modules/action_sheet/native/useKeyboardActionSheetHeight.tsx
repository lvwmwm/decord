// Module ID: 11186
// Function ID: 87001
// Name: computeKeyboardActionSheetHeight
// Dependencies: [5084, 1557, 1450, 5163, 2]
// Exports: default, getKeyboardActionSheetHeight

// Module 11186 (computeKeyboardActionSheetHeight)
function computeKeyboardActionSheetHeight(safeAreaInsets, windowDimensions, customKeyboardHeight) {
  let diff = windowDimensions.height - require(5084) /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT_MULTILINE - safeAreaInsets.top;
  if (customKeyboardHeight >= diff) {
    diff = customKeyboardHeight;
  }
  const obj = { minimum: customKeyboardHeight, maximum: diff };
  return obj;
}
const result = require("useWindowDimensions").fileFinishedImporting("modules/action_sheet/native/useKeyboardActionSheetHeight.tsx");

export default function useKeyboardActionSheetHeight() {
  const tmp = importDefault(1557)();
  return computeKeyboardActionSheetHeight(tmp, importDefault(1450)({ ignoreKeyboard: true }), importDefault(5163)());
};
export const getKeyboardActionSheetHeight = function getKeyboardActionSheetHeight() {
  const safeAreaInsets = require(1557) /* useSafeAreaInsets */.getSafeAreaInsets();
  const obj = require(1557) /* useSafeAreaInsets */;
  const windowDimensions = require(1450) /* useWindowDimensions */.getWindowDimensions({ ignoreKeyboard: true });
  const obj2 = require(1450) /* useWindowDimensions */;
  return computeKeyboardActionSheetHeight(safeAreaInsets, windowDimensions, require(5163) /* useCustomKeyboardHeight */.getCustomKeyboardHeight());
};
