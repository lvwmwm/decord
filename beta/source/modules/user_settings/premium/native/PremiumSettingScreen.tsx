// Module ID: 15250
// Function ID: 15251
// Name: PremiumSettingScreen
// Dependencies: [19, 21, 558, 568, 7240, 1488, 7236, 7657, 2]

// Module 15250 (PremiumSettingScreen)
import c from "c" /* 568 */;
import useNavigation from "useNavigation" /* 1488 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 7236 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7240 */;
import UserSettingsPremiumDefault from "UserSettingsPremium" /* 7657 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumSettingScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  const settingNavigationRoute = useSettingNavigationRoute.useSettingNavigationRoute();
  const stackNavigation = useNavigation.useStackNavigation();
  let close;
  if (!stackNavigation.canGoBack()) {
    close = UserSettingsModalActionCreatorsDefault.close;
  }
  if (cResult[0] === close) {
    if (cResult[1] === settingNavigationRoute.params) {
      let tmp6 = cResult[2];
    }
    return tmp6;
  }
  const obj4 = { onClose: close };
  const merged = Object.assign(settingNavigationRoute.params);
  const tmp9 = jsx(UserSettingsPremiumDefault, { onClose: close });
  cResult[0] = close;
  cResult[1] = settingNavigationRoute.params;
  cResult[2] = tmp9;
  tmp6 = tmp9;
}) : (() => {
  const settingNavigationRoute = useSettingNavigationRoute.useSettingNavigationRoute();
  const stackNavigation = useNavigation.useStackNavigation();
  let close;
  if (!stackNavigation.canGoBack()) {
    close = UserSettingsModalActionCreatorsDefault.close;
  }
  const obj3 = { onClose: close };
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(UserSettingsPremiumDefault, { onClose: close });
});
