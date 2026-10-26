// Module ID: 7090
// Function ID: 7091
// Name: useSettingNavigationRoute
// Dependencies: [558, 1506, 2]
// Exports: useSettingNavigationRoute

// Module 7090 (useSettingNavigationRoute)
import Link from "Link" /* 1506 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/user_settings/core/native/useSettingNavigationRoute.tsx");

export const useSettingNavigationRoute = function useSettingNavigationRoute() {
  const obj = Link;
  return obj.useRoute();
};
