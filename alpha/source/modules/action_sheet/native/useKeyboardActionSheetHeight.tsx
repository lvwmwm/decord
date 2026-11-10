// Module ID: 11396
// Function ID: 11397
// Name: useKeyboardActionSheetHeight
// Dependencies: [5716, 1627, 1493, 5738, 2]
// Exports: default, getKeyboardActionSheetHeight

// Module 11396 (useKeyboardActionSheetHeight)
import useWindowDimensions from "useWindowDimensions" /* 1493 */;
import useSafeAreaInsets from "useSafeAreaInsets" /* 1627 */;
import NavigatorConstants from "NavigatorConstants" /* 5716 */;
import useCustomKeyboardHeight from "useCustomKeyboardHeight" /* 5738 */;
import size from "module_2" /* 2 */;

const useWindowDimensionsDefault = useWindowDimensions;
const useSafeAreaInsetsDefault = useSafeAreaInsets;
const useCustomKeyboardHeightDefault = useCustomKeyboardHeight;

const result = size.fileFinishedImporting("modules/action_sheet/native/useKeyboardActionSheetHeight.tsx");

export default function useKeyboardActionSheetHeight() {
  const tmp2 = useSafeAreaInsetsDefault();
  const tmp3 = useWindowDimensionsDefault({ ignoreKeyboard: true });
  const tmp4 = useCustomKeyboardHeightDefault();
  const maximum = Math.max(0, tmp3.height - NavigatorConstants.NAV_BAR_HEIGHT_MULTILINE - tmp2.top);
  let minimum = Math.min(tmp4, maximum);
  if (minimum >= maximum) {
    const _Math = Math;
    minimum = Math.max(0, maximum - NavigatorConstants.NAV_BAR_HEIGHT_MULTILINE);
  }
  return { minimum, maximum };
};
export function getKeyboardActionSheetHeight() {
  const obj = useSafeAreaInsets;
  const safeAreaInsets = obj.getSafeAreaInsets();
  const obj2 = useWindowDimensions;
  const windowDimensions = obj2.getWindowDimensions({ ignoreKeyboard: true });
  const obj3 = useCustomKeyboardHeight;
  const customKeyboardHeight = obj3.getCustomKeyboardHeight();
  const maximum = Math.max(0, windowDimensions.height - NavigatorConstants.NAV_BAR_HEIGHT_MULTILINE - safeAreaInsets.top);
  let minimum = Math.min(customKeyboardHeight, maximum);
  if (minimum >= maximum) {
    const _Math = Math;
    minimum = Math.max(0, maximum - NavigatorConstants.NAV_BAR_HEIGHT_MULTILINE);
  }
  return { minimum, maximum };
}
