// Module ID: 13894
// Function ID: 106335
// Name: AuthorizedAppScreen
// Dependencies: [31, 33, 6653, 1456, 13895, 2]
// Exports: default

// Module 13894 (AuthorizedAppScreen)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/authorized_apps/native/AuthorizedAppScreen.tsx");

export default function AuthorizedAppScreen() {
  let obj = settingNavigationRoute(6653);
  settingNavigationRoute = obj.useSettingNavigationRoute();
  const stackNavigation = settingNavigationRoute(1456).useStackNavigation();
  const items = [stackNavigation, settingNavigationRoute.params.oauth2Token.application.name];
  const layoutEffect = React.useLayoutEffect(() => {
    stackNavigation.setOptions({ title: settingNavigationRoute.params.oauth2Token.application.name, headerShown: true });
  }, items);
  obj = { oauth2Token: settingNavigationRoute.params.oauth2Token };
  return jsx(stackNavigation(13895), { oauth2Token: settingNavigationRoute.params.oauth2Token });
};
