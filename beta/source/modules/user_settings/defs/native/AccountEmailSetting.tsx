// Module ID: 15016
// Function ID: 15017
// Name: AccountEmailSetting
// Dependencies: [1372, 8265, 504, 5870, 11754, 1115, 2]

// Module 15016 (AccountEmailSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import EmailVerificationModalActionCreatorsDefault from "EmailVerificationModalActionCreators" /* 5870 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const SettingBuilders = fn(11754);
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["w/qqKK"]);
  },
  parent: fn(8265).MobileUserSettings.ACCOUNT,
  useTrailing: function useAccountEmailSettingTrailing() {
    const items = [UserStore];
    return initialize.useStateFromStores(items, () => {
      currentUser = currentUser.getCurrentUser();
      let email;
      if (currentUser != null) {
        email = currentUser.email;
      }
      return email;
    });
  },
  onPress: function onAccountEmailSettingPress() {
    EmailVerificationModalActionCreatorsDefault.open(true);
  },
  withArrow: true
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountEmailSetting.tsx");

export default pressable;
