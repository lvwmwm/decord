// Module ID: 14479
// Function ID: 14480
// Name: AccountPhoneSetting
// Dependencies: [1372, 7612, 6660, 504, 5069, 6659, 1981, 6662, 11211, 1115, 2]

// Module 14479 (AccountPhoneSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5069 */;
import PhoneActionCreators from "PhoneActionCreators" /* 6662 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
let closure_4 = fn(6660).PHONE_VERIFICATION_MODAL_KEY;
const SettingBuilders = fn(11211);
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.dEYpSt);
  },
  parent: fn(7612).MobileUserSettings.ACCOUNT,
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
    obj.pushLazy(asyncRequireImpl(6659, dependencyMap.paths), obj2, closure_4);
  },
  withArrow: true
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountPhoneSetting.tsx");

export default pressable;
