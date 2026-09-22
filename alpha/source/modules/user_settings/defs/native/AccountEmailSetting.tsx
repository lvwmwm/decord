// Module ID: 14995
// Function ID: 14996
// Name: AccountEmailSetting
// Dependencies: [1372, 8237, 504, 5840, 11729, 1115, 2]

// Module 14995 (AccountEmailSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import EmailVerificationModalActionCreatorsDefault from "EmailVerificationModalActionCreators" /* 5840 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const SettingBuilders = fn(11729);
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["w/qqKK"]);
  },
  parent: fn(8237).MobileUserSettings.ACCOUNT,
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
