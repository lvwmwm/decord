// Module ID: 15887
// Function ID: 15888
// Name: AccountEmailSetting
// Dependencies: [1386, 8592, 504, 7222, 11817, 1112, 2]

// Module 15887 (AccountEmailSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1112 */;
import EmailVerificationModalActionCreatorsDefault from "EmailVerificationModalActionCreators" /* 7222 */;
import SettingsConstants from "SettingsConstants" /* 8592 */;
import UserStore from "UserStore" /* 1386 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
import size from "module_2" /* 2 */;

let currentUser;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["w/qqKK"]);
  },
  parent: MobileUserSettings.ACCOUNT,
  useTrailing: function useAccountEmailSettingTrailing() {
    const items = [UserStore];
    const obj = get_initialized;
    return obj.useStateFromStores(items, () => {
      currentUser = currentUser.getCurrentUser();
      let email;
      if (currentUser != null) {
        email = currentUser.email;
      }
      return email;
    });
  },
  onPress: function onAccountEmailSettingPress() {
    const obj = EmailVerificationModalActionCreatorsDefault;
    obj.open(true);
  },
  withArrow: true
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountEmailSetting.tsx");

export default pressable;
