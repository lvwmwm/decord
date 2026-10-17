// Module ID: 16307
// Function ID: 16308
// Name: SoundboardVolumeSetting
// Dependencies: [8260, 11065, 1128, 7332, 7324, 7155, 2]

// Module 16307 (SoundboardVolumeSetting)
import intl2 from "intl" /* 1128 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7155 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7324 */;
import SoundboardUtils from "SoundboardUtils" /* 7332 */;
import SettingsConstants from "SettingsConstants" /* 8260 */;
import SettingBuilders from "SettingBuilders" /* 11065 */;
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
