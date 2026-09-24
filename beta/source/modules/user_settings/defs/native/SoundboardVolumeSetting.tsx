// Module ID: 15522
// Function ID: 15523
// Name: SoundboardVolumeSetting
// Dependencies: [8270, 11630, 1119, 7620, 7614, 7461, 2]

// Module 15522 (SoundboardVolumeSetting)
import util from "util" /* 1119 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7461 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7614 */;
import SoundboardUtils from "SoundboardUtils" /* 7620 */;
import SettingsConstants from "SettingsConstants" /* 8270 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
import size from "module_2" /* 2 */;

const volumeSlider = SettingBuilders.createVolumeSlider({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.kbFsAD);
  },
  parent: SettingsConstants.MobileUserSettings.VOICE,
  maximum: 100,
  useValue: SoundboardUtils.getAmplitudinalSoundboardVolume,
  onValueChange(volume) {
    const items = [AnalyticsLocationDefault.USER_SETTINGS];
    return SoundboardActionCreators.updateUserSoundboardVolume(volume, items);
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SoundboardVolumeSetting.tsx");

export default volumeSlider;
