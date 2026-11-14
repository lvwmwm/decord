// Module ID: 17301
// Function ID: 17302
// Name: AccountSmsBackupSetting
// Dependencies: [1388, 9202, 1072, 7818, 504, 17295, 1113, 17290, 17298, 6269, 6848, 7817, 2121, 7820, 12, 12406, 17208, 2]

// Module 17301 (AccountSmsBackupSetting)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1072 */;
import intl4 from "intl" /* 1113 */;
import asyncRequire from "asyncRequire" /* 2121 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 6269 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6848 */;
import PhoneConstants from "PhoneConstants" /* 7818 */;
import PhoneActionCreators from "PhoneActionCreators" /* 7820 */;
import SettingsConstants from "SettingsConstants" /* 9202 */;
import SettingsAccountUtils from "SettingsAccountUtils" /* 17208 */;
import MFAActionCreatorsDefault from "MFAActionCreators" /* 17290 */;
import showUserSettingsInputAlertDefault from "showUserSettingsInputAlert" /* 17298 */;
import UserStore from "UserStore" /* 1388 */;
import module_12 from "module_12" /* 12 */;
import SettingBuilders from "SettingBuilders" /* 12406 */;
import size from "module_2" /* 2 */;

let tmp;
const account_MFAUtils = tmp(17295);
const f115055 = () => currentUser.getCurrentUser();
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
    const tmp6 = asyncRequire(7817, dependencyMap.paths);
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
    const stateFromStores = obj.useStateFromStores(items, f115055);
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
    const stateFromStores = obj.useStateFromStores(items, f115055);
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
