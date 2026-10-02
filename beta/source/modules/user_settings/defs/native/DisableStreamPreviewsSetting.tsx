// Module ID: 15468
// Function ID: 15469
// Name: DisableStreamPreviewsSetting
// Dependencies: [7421, 558, 2027, 10874, 1127, 2]

// Module 15468 (DisableStreamPreviewsSetting)
import intl2 from "intl" /* 1127 */;
import UserSettings from "UserSettings" /* 2027 */;
import SettingsConstants from "SettingsConstants" /* 7421 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
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
  useValue: () => {
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
