// Module ID: 14476
// Function ID: 14477
// Name: AuthorizedAppScreen
// Dependencies: [19, 21, 6415, 1485, 14477, 2]
// Exports: default

// Module 14476 (AuthorizedAppScreen)
import useNavigation from "useNavigation" /* 1485 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 6415 */;
import UserSettingsAuthedAppDefault from "UserSettingsAuthedApp" /* 14477 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/AuthorizedAppScreen.tsx");

export default function AuthorizedAppScreen() {
  const settingNavigationRoute = useSettingNavigationRoute.useSettingNavigationRoute();
  const stackNavigation = useNavigation.useStackNavigation();
  const items = [stackNavigation, settingNavigationRoute.params.oauth2Token.application.name];
  const layoutEffect = noop.useLayoutEffect(() => {
    stackNavigation.setOptions({ title: settingNavigationRoute.params.oauth2Token.application.name, headerShown: true });
  }, items);
  return jsx(UserSettingsAuthedAppDefault, { oauth2Token: settingNavigationRoute.params.oauth2Token });
};
