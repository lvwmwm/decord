// Module ID: 16366
// Function ID: 16367
// Name: AccountDeleteSetting
// Dependencies: [8365, 16367, 11248, 1125, 2]

// Module 16366 (AccountDeleteSetting)
import intl2 from "intl" /* 1125 */;
import SettingsConstants from "SettingsConstants" /* 8365 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 16367 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["8lQ2rR"]);
  },
  parent: MobileUserSettings.ACCOUNT,
  variant: "danger",
  onPress: function handlePress() {
    handleDisableAccountDefault(true);
  }
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountDeleteSetting.tsx");

export default pressable;
