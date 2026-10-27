// Module ID: 7092
// Function ID: 7093
// Name: useSettingNavigationRoute
// Dependencies: [558, 1503, 2]
// Exports: useSettingNavigationRoute

// Module 7092 (useSettingNavigationRoute)
import Link from "Link" /* 1503 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/user_settings/core/native/useSettingNavigationRoute.tsx");

export const useSettingNavigationRoute = function useSettingNavigationRoute() {
  const obj = Link;
  return obj.useRoute();
};
