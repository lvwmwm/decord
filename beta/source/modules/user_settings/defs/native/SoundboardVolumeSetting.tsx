// Module ID: 17244
// Function ID: 17245
// Name: SoundboardVolumeSetting
// Dependencies: [8432, 11540, 1113, 7525, 7517, 7351, 2]

// Module 17244 (SoundboardVolumeSetting)
import intl2 from "intl" /* 1113 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7351 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7517 */;
import SoundboardUtils from "SoundboardUtils" /* 7525 */;
import SettingsConstants from "SettingsConstants" /* 8432 */;
import SettingBuilders from "SettingBuilders" /* 11540 */;
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
