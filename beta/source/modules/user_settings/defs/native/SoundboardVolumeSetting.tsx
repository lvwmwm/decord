// Module ID: 15512
// Function ID: 15513
// Name: SoundboardVolumeSetting
// Dependencies: [8238, 11594, 1119, 7588, 7582, 7429, 2]

// Module 15512 (SoundboardVolumeSetting)
import util from "util" /* 1119 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7429 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7582 */;
import SoundboardUtils from "SoundboardUtils" /* 7588 */;
import SettingsConstants from "SettingsConstants" /* 8238 */;
import SettingBuilders from "SettingBuilders" /* 11594 */;
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
