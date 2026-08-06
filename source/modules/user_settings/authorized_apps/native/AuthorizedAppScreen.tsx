// Module ID: 14101
// Function ID: 14102
// Name: AuthorizedAppScreen
// Dependencies: [19, 21, 6799, 1480, 14102, 2]
// Exports: default

// Module 14101 (AuthorizedAppScreen)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/authorized_apps/native/AuthorizedAppScreen.tsx");

export default function AuthorizedAppScreen() {
  let obj = settingNavigationRoute(6799);
  settingNavigationRoute = obj.useSettingNavigationRoute();
  const stackNavigation = settingNavigationRoute(1480).useStackNavigation();
  const items = [stackNavigation, settingNavigationRoute.params.oauth2Token.application.name];
  const layoutEffect = React.useLayoutEffect(() => {
    stackNavigation.setOptions({ title: settingNavigationRoute.params.oauth2Token.application.name, headerShown: true });
  }, items);
  obj = { oauth2Token: settingNavigationRoute.params.oauth2Token };
  return jsx(stackNavigation(14102), { oauth2Token: settingNavigationRoute.params.oauth2Token });
};
