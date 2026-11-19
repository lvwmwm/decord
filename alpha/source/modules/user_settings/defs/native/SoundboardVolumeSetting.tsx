// Module ID: 16711
// Function ID: 16712
// Name: SoundboardVolumeSetting
// Dependencies: [8593, 11875, 1113, 10922, 6709, 7420, 2]

// Module 16711 (SoundboardVolumeSetting)
import intl2 from "intl" /* 1113 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 6709 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7420 */;
import SettingsConstants from "SettingsConstants" /* 8593 */;
import SoundboardUtils from "SoundboardUtils" /* 10922 */;
import SettingBuilders from "SettingBuilders" /* 11875 */;
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
