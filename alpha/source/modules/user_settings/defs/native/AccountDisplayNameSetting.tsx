// Module ID: 14799
// Function ID: 14800
// Name: AccountDisplayNameSetting
// Dependencies: [1389, 7966, 1085, 558, 576, 504, 11262, 1126, 14653, 2]

// Module 14799 (AccountDisplayNameSetting)
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import UserStore from "UserStore" /* 1389 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let currentUser;

let tmp;
const get_initialized = tmp(504);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAccountDisplayNameSettingTrailing() {
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function s() {
      currentUser = currentUser.getCurrentUser();
      let globalName;
      if (currentUser != null) {
        globalName = currentUser.globalName;
      }
      return globalName;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (function useAccountDisplayNameSettingTrailing() {
  const items = [UserStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let globalName;
    if (currentUser != null) {
      globalName = currentUser.globalName;
    }
    return globalName;
  });
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["9AjdkD"]);
  },
  parent: MobileUserSettings.ACCOUNT,
  useTrailing: tmp2,
  screen: {
    route: UserSettingsSections.PROFILE_CUSTOMIZATION,
    getComponent() {
      return require("ProfileCustomizationSettingScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountDisplayNameSetting.tsx");

export default route;
