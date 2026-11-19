// Module ID: 15965
// Function ID: 15966
// Name: AccountEnable2faSetting
// Dependencies: [1388, 8593, 15893, 15966, 5739, 1113, 11875, 2]

// Module 15965 (AccountEnable2faSetting)
import intl3 from "intl" /* 1113 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5739 */;
import SettingsConstants from "SettingsConstants" /* 8593 */;
import SettingsAccountUtils from "SettingsAccountUtils" /* 15893 */;
import TwoFASetupModalActionCreatorsDefault from "TwoFASetupModalActionCreators" /* 15966 */;
import UserStore from "UserStore" /* 1388 */;
import SettingBuilders from "SettingBuilders" /* 11875 */;
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
