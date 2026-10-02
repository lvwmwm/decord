// Module ID: 6415
// Function ID: 6416
// Name: useSettingNavigationRoute
// Dependencies: [558, 1492, 2]
// Exports: useSettingNavigationRoute

// Module 6415 (useSettingNavigationRoute)
import Link from "Link" /* 1492 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/user_settings/core/native/useSettingNavigationRoute.tsx");

export const useSettingNavigationRoute = () => {
  const obj = Link;
  return obj.useRoute();
};
