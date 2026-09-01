// Module ID: 7159
// Function ID: 7160
// Name: useSettingNavigationRoute
// Dependencies: [1500, 2]
// Exports: useSettingNavigationRoute

// Module 7159 (useSettingNavigationRoute)
import set from "set" /* 2 */;
import createStandardNavigationFactories from "createStandardNavigationFactories" /* 1500 */;

const result = set.fileFinishedImporting("modules/user_settings/core/native/useSettingNavigationRoute.tsx");

export const useSettingNavigationRoute = function useSettingNavigationRoute() {
  return createStandardNavigationFactories.useRoute();
};
