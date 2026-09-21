// Module ID: 15078
// Function ID: 15079
// Name: AccountDisableSetting
// Dependencies: [8238, 15077, 11594, 1119, 2]

// Module 15078 (AccountDisableSetting)
import util from "util" /* 1119 */;
import SettingsConstants from "SettingsConstants" /* 8238 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 15077 */;
import SettingBuilders from "SettingBuilders" /* 11594 */;
import size from "module_2" /* 2 */;

const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.jf5GGb);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT,
  onPress: function onAccountDisablePress() {
    handleDisableAccountDefault(false);
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountDisableSetting.tsx");

export default pressable;
