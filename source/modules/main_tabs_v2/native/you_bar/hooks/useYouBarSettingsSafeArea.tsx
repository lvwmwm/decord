// Module ID: 6503
// Function ID: 58123
// Name: useYouBarSettingsOutsideSafeAreaTop
// Dependencies: [1557, 6504, 478, 2]
// Exports: useYouBarSettingsCustomHeaderPaddingTop

// Module 6503 (useYouBarSettingsOutsideSafeAreaTop)
function useYouBarSettingsOutsideSafeAreaTop() {
  const tmp = importDefault(6504)();
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
