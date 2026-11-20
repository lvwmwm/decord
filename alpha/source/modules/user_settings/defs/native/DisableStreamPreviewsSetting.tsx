// Module ID: 17233
// Function ID: 17234
// Name: DisableStreamPreviewsSetting
// Dependencies: [8592, 4619, 11817, 1112, 2]

// Module 17233 (DisableStreamPreviewsSetting)
import intl2 from "intl" /* 1112 */;
import UserSettings from "UserSettings" /* 4619 */;
import SettingsConstants from "SettingsConstants" /* 8592 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
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
