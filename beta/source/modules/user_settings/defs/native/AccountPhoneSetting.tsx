// Module ID: 15017
// Function ID: 15018
// Name: AccountPhoneSetting
// Dependencies: [1372, 8265, 7320, 504, 4991, 7319, 1980, 7322, 11754, 1115, 2]

// Module 15017 (AccountPhoneSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4991 */;
import PhoneActionCreators from "PhoneActionCreators" /* 7322 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
let closure_4 = fn(7320).PHONE_VERIFICATION_MODAL_KEY;
const SettingBuilders = fn(11754);
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.dEYpSt);
  },
  parent: fn(8265).MobileUserSettings.ACCOUNT,
  useTrailing: function useAccountPhoneSettingTrailing() {
    const items = [UserStore];
    return initialize.useStateFromStores(items, () => {
      currentUser = currentUser.getCurrentUser();
      let phone;
      if (currentUser != null) {
        phone = currentUser.phone;
      }
      return phone;
    });
  },
  onPress: function onAccountPhoneSettingPress() {
    const obj2 = { allowDeletePhone: true, reason: null };
    const obj = ModalActionCreatorsDefault;
    obj2.reason = PhoneActionCreators.ChangePhoneReason.USER_SETTINGS_UPDATE;
    obj.pushLazy(asyncRequireImpl(7319, dependencyMap.paths), obj2, closure_4);
  },
  withArrow: true
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountPhoneSetting.tsx");

export default pressable;
