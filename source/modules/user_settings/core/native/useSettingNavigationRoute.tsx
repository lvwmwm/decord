// Module ID: 7021
// Function ID: 7022
// Name: useSettingNavigationRoute
// Dependencies: [1501, 2]
// Exports: useSettingNavigationRoute

// Module 7021 (useSettingNavigationRoute)
import set from "set" /* 2 */;
import createStandardNavigationFactories from "createStandardNavigationFactories" /* 1501 */;

const result = set.fileFinishedImporting("modules/user_settings/core/native/useSettingNavigationRoute.tsx");

export const useSettingNavigationRoute = function useSettingNavigationRoute() {
  return createStandardNavigationFactories.useRoute();
};
