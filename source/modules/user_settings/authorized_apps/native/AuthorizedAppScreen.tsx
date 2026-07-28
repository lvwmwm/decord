// Module ID: 13950
// Function ID: 106640
// Name: AuthorizedAppScreen
// Dependencies: [31, 33, 6309, 1456, 13951, 2]
// Exports: default

// Module 13950 (AuthorizedAppScreen)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/authorized_apps/native/AuthorizedAppScreen.tsx");

export default function AuthorizedAppScreen() {
  let obj = settingNavigationRoute(6309);
  settingNavigationRoute = obj.useSettingNavigationRoute();
  const stackNavigation = settingNavigationRoute(1456).useStackNavigation();
  const items = [stackNavigation, settingNavigationRoute.params.oauth2Token.application.name];
  const layoutEffect = React.useLayoutEffect(() => {
    stackNavigation.setOptions({ title: settingNavigationRoute.params.oauth2Token.application.name, headerShown: true });
  }, items);
  obj = { oauth2Token: settingNavigationRoute.params.oauth2Token };
  return jsx(stackNavigation(13951), { oauth2Token: settingNavigationRoute.params.oauth2Token });
};
