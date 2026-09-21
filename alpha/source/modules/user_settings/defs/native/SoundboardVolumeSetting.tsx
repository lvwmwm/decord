// Module ID: 15523
// Function ID: 15524
// Name: SoundboardVolumeSetting
// Dependencies: [8233, 11725, 1115, 7586, 7580, 7427, 2]

// Module 15523 (SoundboardVolumeSetting)
import util from "util" /* 1115 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7427 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7580 */;
import SoundboardUtils from "SoundboardUtils" /* 7586 */;
import SettingsConstants from "SettingsConstants" /* 8233 */;
import SettingBuilders from "SettingBuilders" /* 11725 */;
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
