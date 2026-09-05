// Module ID: 6994
// Function ID: 6995
// Name: useSettingNavigationRoute
// Dependencies: [1484, 2]
// Exports: useSettingNavigationRoute

// Module 6994 (useSettingNavigationRoute)
import set from "set" /* 2 */;
import createStandardNavigationFactories from "createStandardNavigationFactories" /* 1484 */;

const result = set.fileFinishedImporting("modules/user_settings/core/native/useSettingNavigationRoute.tsx");

export const useSettingNavigationRoute = function useSettingNavigationRoute() {
  return createStandardNavigationFactories.useRoute();
};
