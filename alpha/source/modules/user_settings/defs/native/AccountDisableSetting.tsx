// Module ID: 16606
// Function ID: 16607
// Name: AccountDisableSetting
// Dependencies: [8387, 16605, 11302, 1125, 2]

// Module 16606 (AccountDisableSetting)
import intl2 from "intl" /* 1125 */;
import SettingsConstants from "SettingsConstants" /* 8387 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 16605 */;
import SettingBuilders from "SettingBuilders" /* 11302 */;
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
