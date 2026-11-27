// Module ID: 16470
// Function ID: 16471
// Name: AuthorizedAppScreen
// Dependencies: [19, 21, 7350, 1501, 16465, 2]
// Exports: default

// Module 16470 (AuthorizedAppScreen)
import Fragment from "Fragment" /* 21 */;
import useNavigation from "useNavigation" /* 1501 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7350 */;
import UserSettingsAuthedAppDefault from "UserSettingsAuthedApp" /* 16465 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/AuthorizedAppScreen.tsx");

export default function AuthorizedAppScreen() {
  let obj = useSettingNavigationRoute;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  const obj2 = useNavigation;
  const stackNavigation = obj2.useStackNavigation();
  const items = [stackNavigation, settingNavigationRoute.params.oauth2Token.application.name];
  const layoutEffect = react.useLayoutEffect(() => {
    const obj = { title: settingNavigationRoute.params.oauth2Token.application.name, headerShown: true };
    stackNavigation.setOptions(obj);
  }, items);
  return jsx(UserSettingsAuthedAppDefault, { oauth2Token: settingNavigationRoute.params.oauth2Token });
};
