// Module ID: 15852
// Function ID: 15853
// Name: AccountDisableSetting
// Dependencies: [8260, 15851, 11065, 1128, 2]

// Module 15852 (AccountDisableSetting)
import intl2 from "intl" /* 1128 */;
import SettingsConstants from "SettingsConstants" /* 8260 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 15851 */;
import SettingBuilders from "SettingBuilders" /* 11065 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.jf5GGb);
  },
  parent: MobileUserSettings.ACCOUNT,
  onPress: function onAccountDisablePress() {
    handleDisableAccountDefault(false);
  }
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountDisableSetting.tsx");

export default pressable;
