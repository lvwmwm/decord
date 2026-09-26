// Module ID: 15059
// Function ID: 15060
// Name: AccountEnable2faSetting
// Dependencies: [1372, 8265, 14987, 15060, 5140, 1115, 11754, 2]

// Module 15059 (AccountEnable2faSetting)
import util from "util" /* 1115 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5140 */;
import SettingsAccountUtils from "SettingsAccountUtils" /* 14987 */;
import TwoFASetupModalActionCreatorsDefault from "TwoFASetupModalActionCreators" /* 15060 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const SettingBuilders = fn(11754);
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.cDgKte);
  },
  parent: fn(8265).MobileUserSettings.ACCOUNT,
  onPress: function onAccountEnable2FASettingPress() {
    const currentUser = UserStore.getCurrentUser();
    let verified;
    if (currentUser != null) {
      verified = currentUser.verified;
    }
    if (verified != null) {
      if (verified) {
        TwoFASetupModalActionCreatorsDefault.open();
      }
    }
    const obj3 = { title: null, body: null };
    const intl = util.intl;
    obj3.title = intl.string(util.t.v740sh);
    const intl2 = util.intl;
    obj3.body = intl2.string(util.t.uggF7o);
    AlertActionCreatorsDefault.show(obj3);
  },
  withArrow: true,
  usePredicate: function useHasAccountEnable2FASetting() {
    return !SettingsAccountUtils.useIsTOTPEnabled();
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountEnable2faSetting.tsx");

export default pressable;
