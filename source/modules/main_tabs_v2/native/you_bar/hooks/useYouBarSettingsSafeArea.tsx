// Module ID: 7561
// Function ID: 7562
// Name: useYouBarSettingsCustomHeaderPaddingTop
// Dependencies: [1581, 7562, 501, 2]
// Exports: useYouBarSettingsCustomHeaderPaddingTop, useYouBarSettingsOutsideSafeAreaTop

// Module 7561 (useYouBarSettingsCustomHeaderPaddingTop)
const result = require("PlatformTypes").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarSettingsSafeArea.tsx");

export const useYouBarSettingsCustomHeaderPaddingTop = function useYouBarSettingsCustomHeaderPaddingTop() {
  const tmp = importDefault(7562)();
  const obj = require(501) /* PlatformTypes */;
  let num = 16;
  if (!tmp2) {
    num = importDefault(1581)().top;
  }
  return num;
};
export const useYouBarSettingsOutsideSafeAreaTop = function useYouBarSettingsOutsideSafeAreaTop() {
  const tmp = importDefault(7562)();
  const obj = require(501) /* PlatformTypes */;
  return require(501) /* PlatformTypes */.isIOS() || tmp;
};
