// Module ID: 17478
// Function ID: 17479
// Name: SoundboardVolumeSetting
// Dependencies: [8573, 11728, 1113, 7665, 7657, 7487, 2]

// Module 17478 (SoundboardVolumeSetting)
import intl2 from "intl" /* 1113 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7487 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7657 */;
import SoundboardUtils from "SoundboardUtils" /* 7665 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import SettingBuilders from "SettingBuilders" /* 11728 */;
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
