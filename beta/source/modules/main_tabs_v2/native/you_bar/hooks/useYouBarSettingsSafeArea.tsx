// Module ID: 15658
// Function ID: 15659
// Name: useYouBarSettingsSafeArea
// Dependencies: [1627, 7216, 1357, 2]
// Exports: useYouBarSettingsCustomHeaderPaddingTop, useYouBarSettingsOutsideSafeAreaTop

// Module 15658 (useYouBarSettingsSafeArea)
import utils_PlatformUtils from "utils/PlatformUtils" /* 1357 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7216 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarSettingsSafeArea.tsx");

export function useYouBarSettingsCustomHeaderPaddingTop() {
  const top = useSafeAreaInsetsDefault().top;
  const tmp = useIsWindowLargeDefault();
  let num = 16;
  const obj = utils_PlatformUtils;
  const tmp2 = obj.isIOS() || tmp;
  if (!tmp2) {
    num = top;
  }
  return num;
}
export function useYouBarSettingsOutsideSafeAreaTop() {
  const tmp = useIsWindowLargeDefault();
  const obj = utils_PlatformUtils;
  const tmp2 = obj.isIOS() || tmp;
  return tmp2;
}
