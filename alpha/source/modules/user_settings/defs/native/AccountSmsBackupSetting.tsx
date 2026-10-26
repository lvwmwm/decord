// Module ID: 16064
// Function ID: 16065
// Name: AccountSmsBackupSetting
// Dependencies: [1392, 8332, 1087, 7138, 558, 576, 504, 16059, 1128, 16054, 16061, 5909, 6672, 7137, 2002, 7140, 12, 11208, 15972, 2]

// Module 16064 (AccountSmsBackupSetting)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import Constants from "Constants" /* 1087 */;
import intl4 from "intl" /* 1128 */;
import asyncRequire from "asyncRequire" /* 2002 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5909 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6672 */;
import PhoneConstants from "PhoneConstants" /* 7138 */;
import PhoneActionCreators from "PhoneActionCreators" /* 7140 */;
import SettingsConstants from "SettingsConstants" /* 8332 */;
import SettingsAccountUtils from "SettingsAccountUtils" /* 15972 */;
import MFAActionCreatorsDefault from "MFAActionCreators" /* 16054 */;
import account_MFAUtils from "account/MFAUtils" /* 16059 */;
import showUserSettingsInputAlertDefault from "showUserSettingsInputAlert" /* 16061 */;
import UserStore from "UserStore" /* 1392 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import module_12 from "module_12" /* 12 */;
import SettingBuilders from "SettingBuilders" /* 11208 */;
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
    const tmp6 = asyncRequire(7137, dependencyMap.paths);
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
