// Module ID: 14909
// Function ID: 14910
// Name: AccountPhoneSetting
// Dependencies: [1390, 7974, 6730, 558, 576, 504, 5941, 6729, 2000, 6732, 10629, 1126, 2]

// Module 14909 (AccountPhoneSetting)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5941 */;
import PhoneConstants from "PhoneConstants" /* 6730 */;
import PhoneActionCreators from "PhoneActionCreators" /* 6732 */;
import SettingsConstants from "SettingsConstants" /* 7974 */;
import UserStore from "UserStore" /* 1390 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
import size from "module_2" /* 2 */;

let currentUser;

let tmp;
const get_initialized = tmp(504);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let closure_4 = PhoneConstants.PHONE_VERIFICATION_MODAL_KEY;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAccountPhoneSettingTrailing() {
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function o() {
      currentUser = currentUser.getCurrentUser();
      let phone;
      if (currentUser != null) {
        phone = currentUser.phone;
      }
      return phone;
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
}) : (function useAccountPhoneSettingTrailing() {
  const items = [UserStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let phone;
    if (currentUser != null) {
      phone = currentUser.phone;
    }
    return phone;
  });
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.dEYpSt);
  },
  parent: MobileUserSettings.ACCOUNT,
  useTrailing: tmp2,
  onPress: function onAccountPhoneSettingPress() {
    const pushLazy = ModalActionCreatorsDefault.pushLazy;
    const obj = { allowDeletePhone: true, reason: PhoneActionCreators.ChangePhoneReason.USER_SETTINGS_UPDATE };
    ModalActionCreatorsDefault;
    const tmp2 = asyncRequire(6729, dependencyMap.paths);
    pushLazy(tmp2, obj, closure_4);
  },
  withArrow: true
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountPhoneSetting.tsx");

export default pressable;
