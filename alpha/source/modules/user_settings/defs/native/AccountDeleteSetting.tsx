// Module ID: 15408
// Function ID: 15409
// Name: AccountDeleteSetting
// Dependencies: [7993, 15409, 10663, 1126, 2]

// Module 15408 (AccountDeleteSetting)
import intl2 from "intl" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 7993 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 15409 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
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
