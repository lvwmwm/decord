// Module ID: 16325
// Function ID: 16326
// Name: AccountRemove2faSetting
// Dependencies: [8365, 558, 16326, 5944, 1125, 16321, 11248, 16239, 2]

// Module 16325 (AccountRemove2faSetting)
import intl4 from "intl" /* 1125 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5944 */;
import SettingsConstants from "SettingsConstants" /* 8365 */;
import SettingsAccountUtils from "SettingsAccountUtils" /* 16239 */;
import MFAActionCreatorsDefault from "MFAActionCreators" /* 16321 */;
import account_MFAUtils from "account/MFAUtils" /* 16326 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
let obj = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(intl4.t["D+aE7g"]);
  },
  parent: MobileUserSettings.ACCOUNT,
  onPress: function remove2FA() {
    let intl;
    let intl2;
    let intl3;
    let obj = {
      title: intl.string(intl4.t["D+aE7g"]),
      body: intl2.string(intl4.t.EA4ZEk),
      cancelText: intl3.string(intl4.t["ETE/oC"]),
      onConfirm() {
        const obj = MFAActionCreatorsDefault;
        return obj.disable();
      }
    };
    const show = AlertActionCreatorsDefault.show;
    AlertActionCreatorsDefault;
    intl = intl4.intl;
    intl2 = intl4.intl;
    intl3 = intl4.intl;
    show(obj);
  },
  useIsDisabled() {
    const obj = account_MFAUtils;
    return null !== obj.use2FARemoveDisableReason();
  },
  useDescription: account_MFAUtils.use2FARemoveDisableReason,
  usePredicate: SettingsAccountUtils.useIsTOTPEnabled
};
const pressable = SettingBuilders.createPressable(obj);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/AccountRemove2faSetting.tsx");

export default pressable;
