// Module ID: 16659
// Function ID: 16660
// Name: AccountDisableSetting
// Dependencies: [8424, 16658, 11505, 1114, 2]

// Module 16659 (AccountDisableSetting)
import intl2 from "intl" /* 1114 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 16658 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
