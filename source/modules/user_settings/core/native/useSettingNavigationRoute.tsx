// Module ID: 7169
// Function ID: 7170
// Name: useSettingNavigationRoute
// Dependencies: [1499, 2]
// Exports: useSettingNavigationRoute

// Module 7169 (useSettingNavigationRoute)
import set from "set" /* 2 */;
import createStandardNavigationFactories from "createStandardNavigationFactories" /* 1499 */;

const result = set.fileFinishedImporting("modules/user_settings/core/native/useSettingNavigationRoute.tsx");

export const useSettingNavigationRoute = function useSettingNavigationRoute() {
  return createStandardNavigationFactories.useRoute();
};
