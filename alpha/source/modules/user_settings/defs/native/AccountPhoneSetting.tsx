// Module ID: 15924
// Function ID: 15925
// Name: AccountPhoneSetting
// Dependencies: [1388, 8593, 7301, 504, 6308, 7300, 2121, 7303, 11875, 1113, 2]

// Module 15924 (AccountPhoneSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1113 */;
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6308 */;
import PhoneConstants from "PhoneConstants" /* 7301 */;
import PhoneActionCreators from "PhoneActionCreators" /* 7303 */;
import SettingsConstants from "SettingsConstants" /* 8593 */;
import UserStore from "UserStore" /* 1388 */;
import SettingBuilders from "SettingBuilders" /* 11875 */;
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
    const tmp2 = asyncRequire(7300, dependencyMap.paths);
    pushLazy(tmp2, obj, closure_4);
  },
  withArrow: true
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountPhoneSetting.tsx");

export default pressable;
