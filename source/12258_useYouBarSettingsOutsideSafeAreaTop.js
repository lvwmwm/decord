// Module ID: 12258
// Function ID: 94017
// Name: useYouBarSettingsOutsideSafeAreaTop
// Dependencies: []
// Exports: useYouBarSettingsCustomHeaderPaddingTop

// Module 12258 (useYouBarSettingsOutsideSafeAreaTop)
function useYouBarSettingsOutsideSafeAreaTop() {
  const tmp = importDefault(dependencyMap[1])();
  const obj = require(dependencyMap[2]);
  return require(dependencyMap[2]).isIOS() || tmp;
}
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarSettingsSafeArea.tsx");

export const useYouBarSettingsCustomHeaderPaddingTop = function useYouBarSettingsCustomHeaderPaddingTop() {
  let num = 16;
  if (!useYouBarSettingsOutsideSafeAreaTop()) {
    num = importDefault(dependencyMap[0])().top;
  }
  return num;
};
export { useYouBarSettingsOutsideSafeAreaTop };
