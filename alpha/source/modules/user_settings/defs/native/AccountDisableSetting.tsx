// Module ID: 14895
// Function ID: 14896
// Name: AccountDisableSetting
// Dependencies: [7966, 14894, 11262, 1126, 2]

// Module 14895 (AccountDisableSetting)
import intl2 from "intl" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 14894 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
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
