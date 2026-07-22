// Module ID: 13732
// Function ID: 103885
// Name: AuthorizedAppPermissionsScreen
// Dependencies: []
// Exports: default

// Module 13732 (AuthorizedAppPermissionsScreen)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/user_settings/authorized_apps/native/AuthorizedAppPermissionsScreen.tsx");

export default function AuthorizedAppPermissionsScreen() {
  let obj = arg1(dependencyMap[2]);
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = { oauth2Token: settingNavigationRoute.params.oauth2Token };
  return jsx(importDefault(dependencyMap[3]), obj);
};
