// Module ID: 16123
// Function ID: 16124
// Name: AccountDisableSetting
// Dependencies: [8712, 16122, 11942, 1112, 2]

// Module 16123 (AccountDisableSetting)
import intl2 from "intl" /* 1112 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 16122 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.jf5GGb);
  },
  parent: MobileUserSettings.ACCOUNT,
  onPress: function onAccountDisablePress() {
    handleDisableAccountDefault(false);
  }
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountDisableSetting.tsx");

export default pressable;
