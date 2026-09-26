// Module ID: 15091
// Function ID: 15092
// Name: AccountDisableSetting
// Dependencies: [8265, 15090, 11754, 1115, 2]

// Module 15091 (AccountDisableSetting)
import util from "util" /* 1115 */;
import SettingsConstants from "SettingsConstants" /* 8265 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 15090 */;
import SettingBuilders from "SettingBuilders" /* 11754 */;
import size from "module_2" /* 2 */;

const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.jf5GGb);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT,
  onPress: function onAccountDisablePress() {
    handleDisableAccountDefault(false);
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountDisableSetting.tsx");

export default pressable;
