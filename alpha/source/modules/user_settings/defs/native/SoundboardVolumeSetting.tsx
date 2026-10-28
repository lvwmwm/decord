// Module ID: 16881
// Function ID: 16882
// Name: SoundboardVolumeSetting
// Dependencies: [8365, 11248, 1125, 7488, 7480, 7314, 2]

// Module 16881 (SoundboardVolumeSetting)
import intl2 from "intl" /* 1125 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7314 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7480 */;
import SoundboardUtils from "SoundboardUtils" /* 7488 */;
import SettingsConstants from "SettingsConstants" /* 8365 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
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
