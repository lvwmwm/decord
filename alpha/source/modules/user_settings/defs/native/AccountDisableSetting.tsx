// Module ID: 16040
// Function ID: 16041
// Name: AccountDisableSetting
// Dependencies: [8318, 16039, 11181, 1128, 2]

// Module 16040 (AccountDisableSetting)
import intl2 from "intl" /* 1128 */;
import SettingsConstants from "SettingsConstants" /* 8318 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 16039 */;
import SettingBuilders from "SettingBuilders" /* 11181 */;
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
