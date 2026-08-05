// Module ID: 11307
// Function ID: 11308
// Name: useKeyboardActionSheetHeight
// Dependencies: [5220, 1581, 1474, 5298, 2]
// Exports: default, getKeyboardActionSheetHeight

// Module 11307 (useKeyboardActionSheetHeight)
const result = require("useWindowDimensions").fileFinishedImporting("modules/action_sheet/native/useKeyboardActionSheetHeight.tsx");

export default function useKeyboardActionSheetHeight() {
  const tmp = importDefault(1581)();
  const minimum = importDefault(5298)();
  let maximum = importDefault(1474)({ ignoreKeyboard: true }).height - require(5220) /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT_MULTILINE - tmp.top;
  if (minimum >= maximum) {
    maximum = minimum;
  }
  return { minimum, maximum };
};
export const getKeyboardActionSheetHeight = function getKeyboardActionSheetHeight() {
  const safeAreaInsets = require(1581) /* useSafeAreaInsets */.getSafeAreaInsets();
  const obj = require(1581) /* useSafeAreaInsets */;
  const windowDimensions = require(1474) /* useWindowDimensions */.getWindowDimensions({ ignoreKeyboard: true });
  const obj2 = require(1474) /* useWindowDimensions */;
  const minimum = require(5298) /* useCustomKeyboardHeight */.getCustomKeyboardHeight();
  let maximum = windowDimensions.height - require(5220) /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT_MULTILINE - safeAreaInsets.top;
  if (minimum >= maximum) {
    maximum = minimum;
  }
  return { minimum, maximum };
};
