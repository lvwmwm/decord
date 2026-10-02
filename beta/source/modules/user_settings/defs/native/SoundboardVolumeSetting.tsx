// Module ID: 14786
// Function ID: 14787
// Name: SoundboardVolumeSetting
// Dependencies: [7421, 10874, 1127, 6763, 6757, 6604, 2]

// Module 14786 (SoundboardVolumeSetting)
import intl2 from "intl" /* 1127 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6604 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 6757 */;
import SoundboardUtils from "SoundboardUtils" /* 6763 */;
import SettingsConstants from "SettingsConstants" /* 7421 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.kbFsAD);
  },
  parent: MobileUserSettings.VOICE,
  maximum: 100,
  useValue: SoundboardUtils.getAmplitudinalSoundboardVolume,
  onValueChange(volume) {
    const updateUserSoundboardVolume = SoundboardActionCreators.updateUserSoundboardVolume;
    const items = [];
    SoundboardActionCreators;
    items[0] = AnalyticsLocationDefault.USER_SETTINGS;
    return updateUserSoundboardVolume(volume, items);
  }
};
const volumeSlider = SettingBuilders.createVolumeSlider(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SoundboardVolumeSetting.tsx");

export default volumeSlider;
