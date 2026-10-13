// Module ID: 15410
// Function ID: 15411
// Name: AccountDisableSetting
// Dependencies: [7993, 15409, 10663, 1126, 2]

// Module 15410 (AccountDisableSetting)
import intl2 from "intl" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 7993 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 15409 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
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
