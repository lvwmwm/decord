// Module ID: 15888
// Function ID: 15889
// Name: AccountPhoneSetting
// Dependencies: [1386, 8592, 7300, 504, 6310, 7299, 2119, 7302, 11817, 1112, 2]

// Module 15888 (AccountPhoneSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1112 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6310 */;
import PhoneConstants from "PhoneConstants" /* 7300 */;
import PhoneActionCreators from "PhoneActionCreators" /* 7302 */;
import SettingsConstants from "SettingsConstants" /* 8592 */;
import UserStore from "UserStore" /* 1386 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
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
    const tmp2 = asyncRequire(7299, dependencyMap.paths);
    pushLazy(tmp2, obj, closure_4);
  },
  withArrow: true
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountPhoneSetting.tsx");

export default pressable;
