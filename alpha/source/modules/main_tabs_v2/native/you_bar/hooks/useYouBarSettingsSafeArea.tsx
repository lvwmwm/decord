// Module ID: 13939
// Function ID: 13940
// Name: useYouBarSettingsSafeArea
// Dependencies: [1628, 7253, 1358, 2]
// Exports: useYouBarSettingsCustomHeaderPaddingTop, useYouBarSettingsOutsideSafeAreaTop

// Module 13939 (useYouBarSettingsSafeArea)
import utils_PlatformUtils from "utils/PlatformUtils" /* 1358 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1628 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7253 */;
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
