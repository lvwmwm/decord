// Module ID: 13966
// Function ID: 13967
// Name: AuthorizedAppScreen
// Dependencies: [19, 21, 6327, 1480, 13967, 2]
// Exports: default

// Module 13966 (AuthorizedAppScreen)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/authorized_apps/native/AuthorizedAppScreen.tsx");

export default function AuthorizedAppScreen() {
  let obj = settingNavigationRoute(6327);
  settingNavigationRoute = obj.useSettingNavigationRoute();
  const stackNavigation = settingNavigationRoute(1480).useStackNavigation();
  const items = [stackNavigation, settingNavigationRoute.params.oauth2Token.application.name];
  const layoutEffect = React.useLayoutEffect(() => {
    stackNavigation.setOptions({ title: settingNavigationRoute.params.oauth2Token.application.name, headerShown: true });
  }, items);
  obj = { oauth2Token: settingNavigationRoute.params.oauth2Token };
  return jsx(stackNavigation(13967), { oauth2Token: settingNavigationRoute.params.oauth2Token });
};
