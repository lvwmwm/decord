// Module ID: 6681
// Function ID: 6682
// Name: useSettingNavigationRoute
// Dependencies: [558, 1504, 2]
// Exports: useSettingNavigationRoute

// Module 6681 (useSettingNavigationRoute)
import Link from "Link" /* 1504 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/user_settings/core/native/useSettingNavigationRoute.tsx");

export const useSettingNavigationRoute = function useSettingNavigationRoute() {
  const obj = Link;
  return obj.useRoute();
};
