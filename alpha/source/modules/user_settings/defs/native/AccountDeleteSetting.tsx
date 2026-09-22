// Module ID: 15094
// Function ID: 15095
// Name: AccountDeleteSetting
// Dependencies: [8237, 15095, 11729, 1115, 2]

// Module 15094 (AccountDeleteSetting)
import util from "util" /* 1115 */;
import SettingsConstants from "SettingsConstants" /* 8237 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 15095 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
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
