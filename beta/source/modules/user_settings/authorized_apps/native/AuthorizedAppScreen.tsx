// Module ID: 16270
// Function ID: 16271
// Name: AuthorizedAppScreen
// Dependencies: [19, 21, 7414, 1500, 16265, 2]
// Exports: default

// Module 16270 (AuthorizedAppScreen)
import Fragment from "Fragment" /* 21 */;
import useNavigation from "useNavigation" /* 1500 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7414 */;
import UserSettingsAuthedAppDefault from "UserSettingsAuthedApp" /* 16265 */;
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
