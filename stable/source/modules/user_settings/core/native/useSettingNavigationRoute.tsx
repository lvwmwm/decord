// Module ID: 6490
// Function ID: 6491
// Name: useSettingNavigationRoute
// Dependencies: [558, 1491, 2]
// Exports: useSettingNavigationRoute

// Module 6490 (useSettingNavigationRoute)
import Link from "Link" /* 1491 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/user_settings/core/native/useSettingNavigationRoute.tsx");

export const useSettingNavigationRoute = () => {
  const obj = Link;
  return obj.useRoute();
};
