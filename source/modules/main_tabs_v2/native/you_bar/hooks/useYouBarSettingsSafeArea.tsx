// Module ID: 7681
// Function ID: 7682
// Name: useYouBarSettingsCustomHeaderPaddingTop
// Dependencies: [1628, 7682, 501, 2]
// Exports: useYouBarSettingsCustomHeaderPaddingTop, useYouBarSettingsOutsideSafeAreaTop

// Module 7681 (useYouBarSettingsCustomHeaderPaddingTop)
const result = require("PlatformTypes").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarSettingsSafeArea.tsx");

export const useYouBarSettingsCustomHeaderPaddingTop = function useYouBarSettingsCustomHeaderPaddingTop() {
  const tmp = importDefault(7682)();
  const obj = require(501) /* PlatformTypes */;
  let num = 16;
  if (!tmp2) {
    num = importDefault(1628)().top;
  }
  return num;
};
export const useYouBarSettingsOutsideSafeAreaTop = function useYouBarSettingsOutsideSafeAreaTop() {
  const tmp = importDefault(7682)();
  const obj = require(501) /* PlatformTypes */;
  return require(501) /* PlatformTypes */.isIOS() || tmp;
};
