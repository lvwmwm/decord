// Module ID: 15526
// Function ID: 15527
// Name: SoundboardVolumeSetting
// Dependencies: [8265, 11754, 1115, 7618, 7612, 7459, 2]

// Module 15526 (SoundboardVolumeSetting)
import util from "util" /* 1115 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7459 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7612 */;
import SoundboardUtils from "SoundboardUtils" /* 7618 */;
import SettingsConstants from "SettingsConstants" /* 8265 */;
import SettingBuilders from "SettingBuilders" /* 11754 */;
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
