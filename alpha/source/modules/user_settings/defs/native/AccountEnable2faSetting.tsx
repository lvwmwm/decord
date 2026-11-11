// Module ID: 17162
// Function ID: 17163
// Name: AccountEnable2faSetting
// Dependencies: [1385, 9136, 17090, 17163, 6205, 1113, 12317, 2]

// Module 17162 (AccountEnable2faSetting)
import intl3 from "intl" /* 1113 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 6205 */;
import SettingsConstants from "SettingsConstants" /* 9136 */;
import SettingsAccountUtils from "SettingsAccountUtils" /* 17090 */;
import TwoFASetupModalActionCreatorsDefault from "TwoFASetupModalActionCreators" /* 17163 */;
import UserStore from "UserStore" /* 1385 */;
import SettingBuilders from "SettingBuilders" /* 12317 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl3.intl;
    return intl.string(intl3.t.cDgKte);
  },
  parent: MobileUserSettings.ACCOUNT,
  onPress: function onAccountEnable2FASettingPress() {
    let intl;
    let intl2;
    const currentUser = UserStore.getCurrentUser();
    let verified;
    if (currentUser != null) {
      verified = currentUser.verified;
    }
    if (verified != null) {
      if (verified) {
        const obj = TwoFASetupModalActionCreatorsDefault;
        obj.open();
      }
    }
    const obj2 = { title: intl.string(intl3.t.v740sh), body: intl2.string(intl3.t.uggF7o) };
    const show = AlertActionCreatorsDefault.show;
    AlertActionCreatorsDefault;
    intl = intl3.intl;
    intl2 = intl3.intl;
    show(obj2);
  },
  withArrow: true,
  usePredicate: function useHasAccountEnable2FASetting() {
    const obj = SettingsAccountUtils;
    return !obj.useIsTOTPEnabled();
  }
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountEnable2faSetting.tsx");

export default pressable;
