// Module ID: 6539
// Function ID: 58213
// Name: useYouBarSettingsOutsideSafeAreaTop
// Dependencies: [1557, 6540, 478, 2]
// Exports: useYouBarSettingsCustomHeaderPaddingTop

// Module 6539 (useYouBarSettingsOutsideSafeAreaTop)
function useYouBarSettingsOutsideSafeAreaTop() {
  const tmp = importDefault(6540)();
  const obj = require(478) /* isWindows */;
  return require(478) /* isWindows */.isIOS() || tmp;
}
const result = require("isWindows").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarSettingsSafeArea.tsx");

export const useYouBarSettingsCustomHeaderPaddingTop = function useYouBarSettingsCustomHeaderPaddingTop() {
  let num = 16;
  if (!useYouBarSettingsOutsideSafeAreaTop()) {
    num = importDefault(1557)().top;
  }
  return num;
};
export { useYouBarSettingsOutsideSafeAreaTop };
