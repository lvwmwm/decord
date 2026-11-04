// Module ID: 16911
// Function ID: 16912
// Name: AccountSmsBackupSetting
// Dependencies: [1385, 8573, 1072, 7348, 504, 16905, 1113, 16900, 16908, 6094, 6879, 7347, 2123, 7350, 12, 11728, 16818, 2]

// Module 16911 (AccountSmsBackupSetting)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1072 */;
import intl4 from "intl" /* 1113 */;
import asyncRequire from "asyncRequire" /* 2123 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 6094 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6879 */;
import PhoneConstants from "PhoneConstants" /* 7348 */;
import PhoneActionCreators from "PhoneActionCreators" /* 7350 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import SettingsAccountUtils from "SettingsAccountUtils" /* 16818 */;
import MFAActionCreatorsDefault from "MFAActionCreators" /* 16900 */;
import showUserSettingsInputAlertDefault from "showUserSettingsInputAlert" /* 16908 */;
import UserStore from "UserStore" /* 1385 */;
import module_12 from "module_12" /* 12 */;
import SettingBuilders from "SettingBuilders" /* 11728 */;
import size from "module_2" /* 2 */;

let tmp;
const account_MFAUtils = tmp(16905);
const f111101 = () => currentUser.getCurrentUser();
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserFlags = Constants.UserFlags;
let closure_5 = PhoneConstants.PHONE_VERIFICATION_MODAL_KEY;
let closure_6 = module_12.debounce(function toggleSMS(user) {
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
    const tmp6 = asyncRequire(7347, dependencyMap.paths);
    pushLazy(tmp6, obj, closure_5);
  }
}, 200);
let obj = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(intl4.t.uHAJ5v);
  },
  parent: MobileUserSettings.ACCOUNT,
  useIsDisabled: function useAccountSMSBackupSettingIsDisabled() {
    let currentUser;
    const items = [UserStore];
    const obj = get_initialized;
    const stateFromStores = obj.useStateFromStores(items, f111101);
    let sMSBackupDisabledMessage = null;
    if (null != stateFromStores) {
      const tmpResult = account_MFAUtils;
      sMSBackupDisabledMessage = tmpResult.getSMSBackupDisabledMessage(stateFromStores);
    }
    return null != sMSBackupDisabledMessage;
  },
  useValue: function useAccountSMSBackupSettingToggleValue() {
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
  },
  onValueChange: function onAccountSMSBackupSettingTogglePress(arg0) {
    const currentUser = UserStore.getCurrentUser();
    if (null != currentUser) {
      const obj = { mfaSMSEnabled: !arg0, user: currentUser };
      closure_6(obj);
    }
  },
  useDescription: function useAccountSMSBackupSettingDescription() {
    const items = [UserStore];
    const obj = get_initialized;
    const stateFromStores = obj.useStateFromStores(items, f111101);
    let sMSBackupDisabledMessage = null;
    if (null != stateFromStores) {
      const tmpResult = account_MFAUtils;
      sMSBackupDisabledMessage = tmpResult.getSMSBackupDisabledMessage(stateFromStores);
    }
    return sMSBackupDisabledMessage;
  },
  usePredicate: SettingsAccountUtils.useIsTOTPEnabled
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountSmsBackupSetting.tsx");

export default toggle;
