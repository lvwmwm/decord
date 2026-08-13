// Module ID: 14252
// Function ID: 14253
// Name: AuthorizedAppScreen
// Dependencies: [19, 21, 6925, 1499, 14253, 2]
// Exports: default

// Module 14252 (AuthorizedAppScreen)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/authorized_apps/native/AuthorizedAppScreen.tsx");

export default function AuthorizedAppScreen() {
  let obj = settingNavigationRoute(6925);
  settingNavigationRoute = obj.useSettingNavigationRoute();
  const stackNavigation = settingNavigationRoute(1499).useStackNavigation();
  const items = [stackNavigation, settingNavigationRoute.params.oauth2Token.application.name];
  const layoutEffect = React.useLayoutEffect(() => {
    stackNavigation.setOptions({ title: settingNavigationRoute.params.oauth2Token.application.name, headerShown: true });
  }, items);
  obj = { oauth2Token: settingNavigationRoute.params.oauth2Token };
  return jsx(stackNavigation(14253), { oauth2Token: settingNavigationRoute.params.oauth2Token });
};
