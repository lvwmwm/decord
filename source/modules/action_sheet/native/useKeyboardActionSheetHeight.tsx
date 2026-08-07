// Module ID: 11356
// Function ID: 11357
// Name: useKeyboardActionSheetHeight
// Dependencies: [5266, 1609, 1474, 5371, 2]
// Exports: default, getKeyboardActionSheetHeight

// Module 11356 (useKeyboardActionSheetHeight)
const result = require("useWindowDimensions").fileFinishedImporting("modules/action_sheet/native/useKeyboardActionSheetHeight.tsx");

export default function useKeyboardActionSheetHeight() {
  const tmp = importDefault(1609)();
  const minimum = importDefault(5371)();
  let maximum = importDefault(1474)({ ignoreKeyboard: true }).height - require(5266) /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT_MULTILINE - tmp.top;
  if (minimum >= maximum) {
    maximum = minimum;
  }
  return { minimum, maximum };
};
export const getKeyboardActionSheetHeight = function getKeyboardActionSheetHeight() {
  const safeAreaInsets = require(1609) /* useSafeAreaInsets */.getSafeAreaInsets();
  const obj = require(1609) /* useSafeAreaInsets */;
  const windowDimensions = require(1474) /* useWindowDimensions */.getWindowDimensions({ ignoreKeyboard: true });
  const obj2 = require(1474) /* useWindowDimensions */;
  const minimum = require(5371) /* useCustomKeyboardHeight */.getCustomKeyboardHeight();
  let maximum = windowDimensions.height - require(5266) /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT_MULTILINE - safeAreaInsets.top;
  if (minimum >= maximum) {
    maximum = minimum;
  }
  return { minimum, maximum };
};
