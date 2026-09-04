// Module ID: 13278
// Function ID: 13279
// Name: useYouBarSettingsCustomHeaderPaddingTop
// Dependencies: [1627, 6885, 1235, 2]
// Exports: useYouBarSettingsCustomHeaderPaddingTop, useYouBarSettingsOutsideSafeAreaTop

// Module 13278 (useYouBarSettingsCustomHeaderPaddingTop)
import set from "set" /* 2 */;
import PlatformTypes from "PlatformTypes" /* 1235 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6885 */;

const result = set.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarSettingsSafeArea.tsx");

export const useYouBarSettingsCustomHeaderPaddingTop = function useYouBarSettingsCustomHeaderPaddingTop() {
  const tmp = useIsWindowLargeDefault();
  const obj = PlatformTypes;
  let num = 16;
  if (!tmp2) {
    num = useSafeAreaInsetsDefault().top;
  }
  return num;
};
export const useYouBarSettingsOutsideSafeAreaTop = function useYouBarSettingsOutsideSafeAreaTop() {
  const tmp = useIsWindowLargeDefault();
  const obj = PlatformTypes;
  return PlatformTypes.isIOS() || tmp;
};
