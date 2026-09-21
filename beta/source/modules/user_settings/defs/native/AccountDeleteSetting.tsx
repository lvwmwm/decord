// Module ID: 15076
// Function ID: 15077
// Name: AccountDeleteSetting
// Dependencies: [8238, 15077, 11594, 1119, 2]

// Module 15076 (AccountDeleteSetting)
import util from "util" /* 1119 */;
import SettingsConstants from "SettingsConstants" /* 8238 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 15077 */;
import SettingBuilders from "SettingBuilders" /* 11594 */;
import size from "module_2" /* 2 */;

const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["8lQ2rR"]);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT,
  variant: "danger",
  onPress: function handlePress() {
    handleDisableAccountDefault(true);
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountDeleteSetting.tsx");

export default pressable;
