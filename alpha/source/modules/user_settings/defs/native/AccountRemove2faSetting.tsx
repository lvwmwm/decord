// Module ID: 15023
// Function ID: 15024
// Name: AccountRemove2faSetting
// Dependencies: [7992, 558, 15024, 5299, 1126, 15019, 10663, 14937, 2]

// Module 15023 (AccountRemove2faSetting)
import intl4 from "intl" /* 1126 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5299 */;
import SettingsConstants from "SettingsConstants" /* 7992 */;
import SettingsAccountUtils from "SettingsAccountUtils" /* 14937 */;
import MFAActionCreatorsDefault from "MFAActionCreators" /* 15019 */;
import account_MFAUtils from "account/MFAUtils" /* 15024 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
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
