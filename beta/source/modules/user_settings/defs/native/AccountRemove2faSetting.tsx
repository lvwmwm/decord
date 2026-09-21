// Module ID: 15059
// Function ID: 15060
// Name: AccountRemove2faSetting
// Dependencies: [8238, 558, 15060, 5110, 1119, 14944, 11594, 14945, 2]

// Module 15059 (AccountRemove2faSetting)
import util from "util" /* 1119 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5110 */;
import SettingsConstants from "SettingsConstants" /* 8238 */;
import MFAActionCreatorsDefault from "MFAActionCreators" /* 14944 */;
import SettingsAccountUtils from "SettingsAccountUtils" /* 14945 */;
import account_MFAUtils from "account/MFAUtils" /* 15060 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11594 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["D+aE7g"]);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT,
  onPress: function remove2FA() {
    const obj2 = { title: null, body: null, cancelText: null, onConfirm: null };
    const intl = util.intl;
    obj2.title = intl.string(util.t["D+aE7g"]);
    const intl2 = util.intl;
    obj2.body = intl2.string(util.t.EA4ZEk);
    const intl3 = util.intl;
    obj2.cancelText = intl3.string(util.t["ETE/oC"]);
    obj2.onConfirm = function onConfirm() {
      return MFAActionCreatorsDefault.disable();
    };
    AlertActionCreatorsDefault.show(obj2);
  },
  useIsDisabled: () => null !== account_MFAUtils.use2FARemoveDisableReason(),
  useDescription: account_MFAUtils.use2FARemoveDisableReason,
  usePredicate: SettingsAccountUtils.useIsTOTPEnabled
});
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/AccountRemove2faSetting.tsx");

export default pressable;
