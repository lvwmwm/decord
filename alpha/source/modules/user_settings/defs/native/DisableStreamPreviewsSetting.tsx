// Module ID: 17572
// Function ID: 17573
// Name: DisableStreamPreviewsSetting
// Dependencies: [9556, 4868, 11970, 1112, 2]

// Module 17572 (DisableStreamPreviewsSetting)
import intl2 from "intl" /* 1112 */;
import UserSettings from "UserSettings" /* 4868 */;
import SettingsConstants from "SettingsConstants" /* 9556 */;
import SettingBuilders from "SettingBuilders" /* 11970 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["1CzWUK"]);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t.jTNPHM);
  },
  parent: MobileUserSettings.VOICE,
  useValue() {
    const DisableStreamPreviews = UserSettings.DisableStreamPreviews;
    let flag = DisableStreamPreviews.useSetting();
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  onValueChange: UserSettings.DisableStreamPreviews.updateSetting
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DisableStreamPreviewsSetting.tsx");

export default toggle;
