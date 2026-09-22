// Module ID: 14899
// Function ID: 14900
// Name: AccountDeleteSetting
// Dependencies: [8079, 14900, 11605, 1114, 2]

// Module 14899 (AccountDeleteSetting)
import util from "util" /* 1114 */;
import SettingsConstants from "SettingsConstants" /* 8079 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 14900 */;
import SettingBuilders from "SettingBuilders" /* 11605 */;
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
