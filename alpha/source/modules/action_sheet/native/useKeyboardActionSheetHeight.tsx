// Module ID: 12015
// Function ID: 12016
// Name: useKeyboardActionSheetHeight
// Dependencies: [5892, 1630, 1496, 5914, 2]
// Exports: default, getKeyboardActionSheetHeight

// Module 12015 (useKeyboardActionSheetHeight)
import useWindowDimensions from "useWindowDimensions" /* 1496 */;
import useSafeAreaInsets from "useSafeAreaInsets" /* 1630 */;
import NavigatorConstants from "NavigatorConstants" /* 5892 */;
import useCustomKeyboardHeight from "useCustomKeyboardHeight" /* 5914 */;
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
