// Module ID: 15089
// Function ID: 15090
// Name: AccountDeleteSetting
// Dependencies: [8265, 15090, 11754, 1115, 2]

// Module 15089 (AccountDeleteSetting)
import util from "util" /* 1115 */;
import SettingsConstants from "SettingsConstants" /* 8265 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 15090 */;
import SettingBuilders from "SettingBuilders" /* 11754 */;
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
