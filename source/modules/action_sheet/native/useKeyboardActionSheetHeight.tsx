// Module ID: 11479
// Function ID: 11480
// Name: useKeyboardActionSheetHeight
// Dependencies: [5307, 1628, 1493, 5412, 2]
// Exports: default, getKeyboardActionSheetHeight

// Module 11479 (useKeyboardActionSheetHeight)
const result = require("useWindowDimensions").fileFinishedImporting("modules/action_sheet/native/useKeyboardActionSheetHeight.tsx");

export default function useKeyboardActionSheetHeight() {
  const tmp = importDefault(1628)();
  const minimum = importDefault(5412)();
  let maximum = importDefault(1493)({ ignoreKeyboard: true }).height - require(5307) /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT_MULTILINE - tmp.top;
  if (minimum >= maximum) {
    maximum = minimum;
  }
  return { minimum, maximum };
};
export const getKeyboardActionSheetHeight = function getKeyboardActionSheetHeight() {
  const safeAreaInsets = require(1628) /* useSafeAreaInsets */.getSafeAreaInsets();
  const obj = require(1628) /* useSafeAreaInsets */;
  const windowDimensions = require(1493) /* useWindowDimensions */.getWindowDimensions({ ignoreKeyboard: true });
  const obj2 = require(1493) /* useWindowDimensions */;
  const minimum = require(5412) /* useCustomKeyboardHeight */.getCustomKeyboardHeight();
  let maximum = windowDimensions.height - require(5307) /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT_MULTILINE - safeAreaInsets.top;
  if (minimum >= maximum) {
    maximum = minimum;
  }
  return { minimum, maximum };
};
