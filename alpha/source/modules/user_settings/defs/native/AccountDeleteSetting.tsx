// Module ID: 14893
// Function ID: 14894
// Name: AccountDeleteSetting
// Dependencies: [7966, 14894, 11262, 1126, 2]

// Module 14893 (AccountDeleteSetting)
import intl2 from "intl" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 14894 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
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
