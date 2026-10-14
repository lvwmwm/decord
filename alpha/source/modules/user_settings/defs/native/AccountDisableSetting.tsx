// Module ID: 15447
// Function ID: 15448
// Name: AccountDisableSetting
// Dependencies: [8000, 15446, 10767, 1126, 2]

// Module 15447 (AccountDisableSetting)
import intl2 from "intl" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 8000 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 15446 */;
import SettingBuilders from "SettingBuilders" /* 10767 */;
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
