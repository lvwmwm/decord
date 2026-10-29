// Module ID: 17778
// Function ID: 17779
// Name: DisableStreamPreviewsSetting
// Dependencies: [8387, 558, 4833, 11302, 1125, 2]

// Module 17778 (DisableStreamPreviewsSetting)
import intl2 from "intl" /* 1125 */;
import UserSettings from "UserSettings" /* 4833 */;
import SettingsConstants from "SettingsConstants" /* 8387 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11302 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
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
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/DisableStreamPreviewsSetting.tsx");

export default toggle;
