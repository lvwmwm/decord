// Module ID: 15741
// Function ID: 15742
// Name: AccountDeleteSetting
// Dependencies: [8210, 15742, 10991, 1126, 2]

// Module 15741 (AccountDeleteSetting)
import intl2 from "intl" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 8210 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 15742 */;
import SettingBuilders from "SettingBuilders" /* 10991 */;
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
