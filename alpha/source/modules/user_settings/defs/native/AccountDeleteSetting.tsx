// Module ID: 16959
// Function ID: 16960
// Name: AccountDeleteSetting
// Dependencies: [8573, 16960, 11729, 1113, 2]

// Module 16959 (AccountDeleteSetting)
import intl2 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 16960 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
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
