// Module ID: 16558
// Function ID: 16559
// Name: AccountEmailSetting
// Dependencies: [1384, 8424, 504, 6989, 11505, 1114, 2]

// Module 16558 (AccountEmailSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1114 */;
import EmailVerificationModalActionCreatorsDefault from "EmailVerificationModalActionCreators" /* 6989 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import UserStore from "UserStore" /* 1384 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
