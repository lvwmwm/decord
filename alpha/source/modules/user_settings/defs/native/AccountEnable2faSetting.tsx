// Module ID: 14520
// Function ID: 14521
// Name: AccountEnable2faSetting
// Dependencies: [1372, 7612, 14449, 14521, 5399, 1115, 11211, 2]

// Module 14520 (AccountEnable2faSetting)
import util from "util" /* 1115 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5399 */;
import SettingsAccountUtils from "SettingsAccountUtils" /* 14449 */;
import TwoFASetupModalActionCreatorsDefault from "TwoFASetupModalActionCreators" /* 14521 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const SettingBuilders = fn(11211);
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.cDgKte);
  },
  parent: fn(7612).MobileUserSettings.ACCOUNT,
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
