// Module ID: 15085
// Function ID: 15086
// Name: AccountDeleteSetting
// Dependencies: [8270, 15086, 11630, 1119, 2]

// Module 15085 (AccountDeleteSetting)
import util from "util" /* 1119 */;
import SettingsConstants from "SettingsConstants" /* 8270 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 15086 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
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
