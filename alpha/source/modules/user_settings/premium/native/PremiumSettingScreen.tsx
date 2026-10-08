// Module ID: 15069
// Function ID: 15070
// Name: PremiumSettingScreen
// Dependencies: [19, 21, 558, 576, 6674, 1502, 6671, 7119, 2]

// Module 15069 (PremiumSettingScreen)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import useNavigation from "useNavigation" /* 1502 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6671 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 6674 */;
import UserSettingsPremiumDefault from "UserSettingsPremium" /* 7119 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumScreen() {
  const obj = react2;
  const cResult = obj.c(3);
  const obj2 = useSettingNavigationRoute;
  const settingNavigationRoute = obj2.useSettingNavigationRoute();
  const obj3 = useNavigation;
  const stackNavigation = obj3.useStackNavigation();
  let close;
  if (!stackNavigation.canGoBack()) {
    close = UserSettingsModalActionCreatorsDefault.close;
  }
  if (cResult[0] === close) {
    let tmp6;
    if (cResult[1] === settingNavigationRoute.params) {
      tmp6 = cResult[2];
    }
    return tmp6;
  }
  UserSettingsPremiumDefault;
  const merged = Object.assign(settingNavigationRoute.params);
  const tmp9 = <tmp7 onClose={close} />;
  cResult[0] = close;
  cResult[1] = settingNavigationRoute.params;
  cResult[2] = tmp9;
  tmp6 = tmp9;
}) : (function PremiumScreen() {
  const obj = useSettingNavigationRoute;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  const obj2 = useNavigation;
  const stackNavigation = obj2.useStackNavigation();
  let close;
  if (!stackNavigation.canGoBack()) {
    close = UserSettingsModalActionCreatorsDefault.close;
  }
  UserSettingsPremiumDefault;
  const merged = Object.assign(settingNavigationRoute.params);
  return <tmp5 onClose={close} />;
});
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumSettingScreen.tsx");

export default tmp3;
