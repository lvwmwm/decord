// Module ID: 16961
// Function ID: 16962
// Name: AccountDisableSetting
// Dependencies: [8573, 16960, 11729, 1113, 2]

// Module 16961 (AccountDisableSetting)
import intl2 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 16960 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
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
