// Module ID: 11209
// Function ID: 11210
// Name: useKeyboardActionSheetHeight
// Dependencies: [6370, 1629, 1494, 5444, 2]
// Exports: default, getKeyboardActionSheetHeight

// Module 11209 (useKeyboardActionSheetHeight)
const result = require("useWindowDimensions").fileFinishedImporting("modules/action_sheet/native/useKeyboardActionSheetHeight.tsx");

export default function useKeyboardActionSheetHeight() {
  const tmp = importDefault(1629)();
  const minimum = importDefault(5444)();
  let maximum = importDefault(1494)({ ignoreKeyboard: true }).height - require(6370) /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT_MULTILINE - tmp.top;
  if (minimum >= maximum) {
    maximum = minimum;
  }
  return { minimum, maximum };
};
export const getKeyboardActionSheetHeight = function getKeyboardActionSheetHeight() {
  const safeAreaInsets = require(1629) /* useSafeAreaInsets */.getSafeAreaInsets();
  const obj = require(1629) /* useSafeAreaInsets */;
  const windowDimensions = require(1494) /* useWindowDimensions */.getWindowDimensions({ ignoreKeyboard: true });
  const obj2 = require(1494) /* useWindowDimensions */;
  const minimum = require(5444) /* useCustomKeyboardHeight */.getCustomKeyboardHeight();
  let maximum = windowDimensions.height - require(6370) /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT_MULTILINE - safeAreaInsets.top;
  if (minimum >= maximum) {
    maximum = minimum;
  }
  return { minimum, maximum };
};
