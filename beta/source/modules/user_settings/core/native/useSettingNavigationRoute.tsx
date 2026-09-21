// Module ID: 7240
// Function ID: 7241
// Name: useSettingNavigationRoute
// Dependencies: [558, 1489, 2]
// Exports: useSettingNavigationRoute

// Module 7240 (useSettingNavigationRoute)
import Link from "Link" /* 1489 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/user_settings/core/native/useSettingNavigationRoute.tsx");

export const useSettingNavigationRoute = () => Link.useRoute();
