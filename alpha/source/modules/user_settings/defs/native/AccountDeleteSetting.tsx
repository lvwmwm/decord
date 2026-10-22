// Module ID: 16038
// Function ID: 16039
// Name: AccountDeleteSetting
// Dependencies: [8318, 16039, 11181, 1128, 2]

// Module 16038 (AccountDeleteSetting)
import intl2 from "intl" /* 1128 */;
import SettingsConstants from "SettingsConstants" /* 8318 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 16039 */;
import SettingBuilders from "SettingBuilders" /* 11181 */;
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
