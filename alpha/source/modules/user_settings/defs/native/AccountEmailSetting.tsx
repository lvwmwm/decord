// Module ID: 16269
// Function ID: 16270
// Name: AccountEmailSetting
// Dependencies: [1389, 8365, 558, 576, 504, 6957, 11248, 1125, 2]

// Module 16269 (AccountEmailSetting)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1125 */;
import EmailVerificationModalActionCreatorsDefault from "EmailVerificationModalActionCreators" /* 6957 */;
import SettingsConstants from "SettingsConstants" /* 8365 */;
import UserStore from "UserStore" /* 1389 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
import size from "module_2" /* 2 */;

let currentUser;

let tmp;
const get_initialized = tmp(504);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAccountEmailSettingTrailing() {
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function s() {
      currentUser = currentUser.getCurrentUser();
      let email;
      if (currentUser != null) {
        email = currentUser.email;
      }
      return email;
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
}) : (function useAccountEmailSettingTrailing() {
  const items = [UserStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let email;
    if (currentUser != null) {
      email = currentUser.email;
    }
    return email;
  });
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["w/qqKK"]);
  },
  parent: MobileUserSettings.ACCOUNT,
  useTrailing: tmp2,
  onPress: function onAccountEmailSettingPress() {
    const obj = EmailVerificationModalActionCreatorsDefault;
    obj.open(true);
  },
  withArrow: true
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountEmailSetting.tsx");

export default pressable;
