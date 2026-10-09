// Module ID: 14970
// Function ID: 14971
// Name: AccountSmsBackupSetting
// Dependencies: [1390, 7974, 1085, 6730, 558, 576, 504, 14965, 1126, 14960, 14967, 5299, 5941, 6729, 2000, 6732, 12, 10629, 14878, 2]

// Module 14970 (AccountSmsBackupSetting)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1126 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5299 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5941 */;
import PhoneConstants from "PhoneConstants" /* 6730 */;
import PhoneActionCreators from "PhoneActionCreators" /* 6732 */;
import SettingsConstants from "SettingsConstants" /* 7974 */;
import SettingsAccountUtils from "SettingsAccountUtils" /* 14878 */;
import MFAActionCreatorsDefault from "MFAActionCreators" /* 14960 */;
import account_MFAUtils from "account/MFAUtils" /* 14965 */;
import showUserSettingsInputAlertDefault from "showUserSettingsInputAlert" /* 14967 */;
import UserStore from "UserStore" /* 1390 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import module_12 from "module_12" /* 12 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserFlags = Constants.UserFlags;
let closure_5 = PhoneConstants.PHONE_VERIFICATION_MODAL_KEY;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAccountSMSBackupSettingDescription() {
  let currentUser;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function s() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  let tmp8 = null;
  if (null != stateFromStores) {
    let tmp9;
    if (cResult[2] !== stateFromStores) {
      const tmpResult2 = account_MFAUtils;
      const sMSBackupDisabledMessage = tmpResult2.getSMSBackupDisabledMessage(stateFromStores);
      cResult[2] = stateFromStores;
      cResult[3] = sMSBackupDisabledMessage;
      tmp9 = sMSBackupDisabledMessage;
    } else {
      tmp9 = cResult[3];
    }
    tmp8 = tmp9;
  }
  return tmp8;
}) : (function useAccountSMSBackupSettingDescription() {
  let currentUser;
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let sMSBackupDisabledMessage = null;
  if (null != stateFromStores) {
    const tmpResult = account_MFAUtils;
    sMSBackupDisabledMessage = tmpResult.getSMSBackupDisabledMessage(stateFromStores);
  }
  return sMSBackupDisabledMessage;
});
let closure_6 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAccountSMSBackupSettingToggleValue() {
  let currentUser;
  let tmp4;
  let tmp5;
  let tmp7;
  const obj = react;
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function u() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    let flag;
    if (stateFromStores != null) {
      flag = stateFromStores.hasFlag(UserFlags.MFA_SMS);
    }
    if (flag == null) {
      flag = false;
    }
    cResult[2] = stateFromStores;
    cResult[3] = flag;
    tmp7 = flag;
  } else {
    tmp7 = cResult[3];
  }
  return tmp7;
}) : (function useAccountSMSBackupSettingToggleValue() {
  let currentUser;
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let flag;
  if (stateFromStores != null) {
    flag = stateFromStores.hasFlag(UserFlags.MFA_SMS);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
});
function useAccountSMSBackupSettingIsDisabled() {
  return null != closure_6();
}
let closure_7 = module_12.debounce(function toggleSMS(user) {
  let formatted1;
  user = user.user;
  if (user.mfaSMSEnabled) {
    const intl2 = intl4.intl;
    const str2 = intl2.string(intl4.t["CIGa+7"]);
    const formatted = str2.toUpperCase();
    const intl3 = intl4.intl;
    const obj3 = { onSubmit: MFAActionCreatorsDefault.disableSMS, title: formatted1, placeholder: formatted, closeOnSuccess: true };
    const str3 = intl3.string(intl4.t.wlfmlR);
    formatted1 = str3.toUpperCase();
    showUserSettingsInputAlertDefault(obj3);
  } else {
    let tmp = null;
    if (null != user) {
      if (null != user.phone) {
        const intl = intl4.intl;
        const str = intl.string(intl4.t.DZQe23);
        const formatted2 = str.toUpperCase();
        const obj4 = { title: formatted2 };
        const obj2 = actions_AlertActionCreatorsDefault;
        const confirmResult = obj2.confirm(obj4);
        confirmResult.then((result) => {
          const tmp = result;
          if (tmp) {
            const obj = MFAActionCreatorsDefault;
            obj.enableSMS();
          }
        });
      }
    }
    const pushLazy = ModalActionCreatorsDefault.pushLazy;
    let obj = { reason: PhoneActionCreators.ChangePhoneReason.USER_SETTINGS_UPDATE };
    ModalActionCreatorsDefault;
    const tmp6 = asyncRequire(6729, dependencyMap.paths);
    pushLazy(tmp6, obj, closure_5);
  }
}, 200);
let obj = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(intl4.t.uHAJ5v);
  },
  parent: MobileUserSettings.ACCOUNT,
  useIsDisabled: useAccountSMSBackupSettingIsDisabled,
  useValue: tmp4,
  onValueChange: function onAccountSMSBackupSettingTogglePress(arg0) {
    const currentUser = UserStore.getCurrentUser();
    if (null != currentUser) {
      const obj = { mfaSMSEnabled: !arg0, user: currentUser };
      closure_7(obj);
    }
  },
  useDescription: tmp2,
  usePredicate: SettingsAccountUtils.useIsTOTPEnabled
};
const toggle = SettingBuilders.createToggle(obj);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/AccountSmsBackupSetting.tsx");

export default toggle;
