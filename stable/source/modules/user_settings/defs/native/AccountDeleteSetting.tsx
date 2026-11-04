// Module ID: 16134
// Function ID: 16135
// Name: AccountDeleteSetting
// Dependencies: [8364, 16135, 11240, 1128, 2]

// Module 16134 (AccountDeleteSetting)
import intl2 from "intl" /* 1128 */;
import SettingsConstants from "SettingsConstants" /* 8364 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 16135 */;
import SettingBuilders from "SettingBuilders" /* 11240 */;
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
