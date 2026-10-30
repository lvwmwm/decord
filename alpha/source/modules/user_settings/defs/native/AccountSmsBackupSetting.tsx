// Module ID: 16621
// Function ID: 16622
// Name: AccountSmsBackupSetting
// Dependencies: [1384, 8424, 1072, 7205, 504, 16615, 1114, 16610, 16618, 5954, 6738, 7204, 1995, 7207, 12, 11505, 16528, 2]

// Module 16621 (AccountSmsBackupSetting)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1072 */;
import intl4 from "intl" /* 1114 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5954 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import PhoneConstants from "PhoneConstants" /* 7205 */;
import PhoneActionCreators from "PhoneActionCreators" /* 7207 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import SettingsAccountUtils from "SettingsAccountUtils" /* 16528 */;
import MFAActionCreatorsDefault from "MFAActionCreators" /* 16610 */;
import showUserSettingsInputAlertDefault from "showUserSettingsInputAlert" /* 16618 */;
import UserStore from "UserStore" /* 1384 */;
import module_12 from "module_12" /* 12 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

let tmp;
const account_MFAUtils = tmp(16615);
const f110110 = () => currentUser.getCurrentUser();
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
    const tmp6 = asyncRequire(7204, dependencyMap.paths);
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
    const stateFromStores = obj.useStateFromStores(items, f110110);
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
    const stateFromStores = obj.useStateFromStores(items, f110110);
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
