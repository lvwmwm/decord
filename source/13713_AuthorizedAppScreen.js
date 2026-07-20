// Module ID: 13713
// Function ID: 103777
// Name: AuthorizedAppScreen
// Dependencies: []
// Exports: default

// Module 13713 (AuthorizedAppScreen)
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/user_settings/authorized_apps/native/AuthorizedAppScreen.tsx");

export default function AuthorizedAppScreen() {
  let obj = arg1(dependencyMap[2]);
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  const arg1 = settingNavigationRoute;
  const stackNavigation = arg1(dependencyMap[3]).useStackNavigation();
  const importDefault = stackNavigation;
  const items = [stackNavigation, settingNavigationRoute.params.oauth2Token.application.name];
  const layoutEffect = React.useLayoutEffect(() => {
    stackNavigation.setOptions({ title: settingNavigationRoute.params.oauth2Token.application.name, headerShown: true });
  }, items);
  obj = { oauth2Token: settingNavigationRoute.params.oauth2Token };
  return jsx(importDefault(dependencyMap[4]), obj);
};
