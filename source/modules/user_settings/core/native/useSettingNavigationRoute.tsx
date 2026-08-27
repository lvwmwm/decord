// Module ID: 7093
// Function ID: 7094
// Name: useSettingNavigationRoute
// Dependencies: [1501, 2]
// Exports: useSettingNavigationRoute

// Module 7093 (useSettingNavigationRoute)
import set from "set" /* 2 */;
import createStandardNavigationFactories from "createStandardNavigationFactories" /* 1501 */;

const result = set.fileFinishedImporting("modules/user_settings/core/native/useSettingNavigationRoute.tsx");

export const useSettingNavigationRoute = function useSettingNavigationRoute() {
  return createStandardNavigationFactories.useRoute();
};
