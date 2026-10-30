// Module ID: 16559
// Function ID: 16560
// Name: AccountPhoneSetting
// Dependencies: [1384, 8424, 7205, 504, 6738, 7204, 1995, 7207, 11505, 1114, 2]

// Module 16559 (AccountPhoneSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1114 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import PhoneConstants from "PhoneConstants" /* 7205 */;
import PhoneActionCreators from "PhoneActionCreators" /* 7207 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import UserStore from "UserStore" /* 1384 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

let currentUser;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let closure_4 = PhoneConstants.PHONE_VERIFICATION_MODAL_KEY;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.dEYpSt);
  },
  parent: MobileUserSettings.ACCOUNT,
  useTrailing: function useAccountPhoneSettingTrailing() {
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
  },
  onPress: function onAccountPhoneSettingPress() {
    const pushLazy = ModalActionCreatorsDefault.pushLazy;
    const obj = { allowDeletePhone: true, reason: PhoneActionCreators.ChangePhoneReason.USER_SETTINGS_UPDATE };
    ModalActionCreatorsDefault;
    const tmp2 = asyncRequire(7204, dependencyMap.paths);
    pushLazy(tmp2, obj, closure_4);
  },
  withArrow: true
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountPhoneSetting.tsx");

export default pressable;
