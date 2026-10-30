// Module ID: 16600
// Function ID: 16601
// Name: AccountEnable2faSetting
// Dependencies: [1384, 8424, 16528, 16601, 5953, 1114, 11505, 2]

// Module 16600 (AccountEnable2faSetting)
import intl3 from "intl" /* 1114 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5953 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import SettingsAccountUtils from "SettingsAccountUtils" /* 16528 */;
import TwoFASetupModalActionCreatorsDefault from "TwoFASetupModalActionCreators" /* 16601 */;
import UserStore from "UserStore" /* 1384 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
