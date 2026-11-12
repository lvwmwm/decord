// Module ID: 17062
// Function ID: 17063
// Name: AccountDisableSetting
// Dependencies: [8536, 17061, 11717, 1113, 2]

// Module 17062 (AccountDisableSetting)
import intl2 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 8536 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 17061 */;
import SettingBuilders from "SettingBuilders" /* 11717 */;
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
