// Module ID: 15983
// Function ID: 15984
// Name: AccountEnable2faSetting
// Dependencies: [1392, 8318, 558, 15911, 15984, 5894, 1128, 11181, 2]

// Module 15983 (AccountEnable2faSetting)
import intl3 from "intl" /* 1128 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5894 */;
import SettingsConstants from "SettingsConstants" /* 8318 */;
import SettingsAccountUtils from "SettingsAccountUtils" /* 15911 */;
import TwoFASetupModalActionCreatorsDefault from "TwoFASetupModalActionCreators" /* 15984 */;
import UserStore from "UserStore" /* 1392 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11181 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
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
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/AccountEnable2faSetting.tsx");

export default pressable;
