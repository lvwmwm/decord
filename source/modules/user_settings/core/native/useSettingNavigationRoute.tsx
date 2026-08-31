// Module ID: 7127
// Function ID: 7128
// Name: useSettingNavigationRoute
// Dependencies: [1500, 2]
// Exports: useSettingNavigationRoute

// Module 7127 (useSettingNavigationRoute)
import set from "set" /* 2 */;
import createStandardNavigationFactories from "createStandardNavigationFactories" /* 1500 */;

const result = set.fileFinishedImporting("modules/user_settings/core/native/useSettingNavigationRoute.tsx");

export const useSettingNavigationRoute = function useSettingNavigationRoute() {
  return createStandardNavigationFactories.useRoute();
};
