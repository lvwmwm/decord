// Module ID: 16652
// Function ID: 16653
// Name: SoundboardVolumeSetting
// Dependencies: [8331, 11212, 1125, 7453, 7445, 7280, 2]

// Module 16652 (SoundboardVolumeSetting)
import intl2 from "intl" /* 1125 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7280 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7445 */;
import SoundboardUtils from "SoundboardUtils" /* 7453 */;
import SettingsConstants from "SettingsConstants" /* 8331 */;
import SettingBuilders from "SettingBuilders" /* 11212 */;
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
