// Module ID: 17120
// Function ID: 17121
// Name: SoundboardVolumeSetting
// Dependencies: [8387, 11302, 1125, 7511, 7503, 7338, 2]

// Module 17120 (SoundboardVolumeSetting)
import intl2 from "intl" /* 1125 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7338 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7503 */;
import SoundboardUtils from "SoundboardUtils" /* 7511 */;
import SettingsConstants from "SettingsConstants" /* 8387 */;
import SettingBuilders from "SettingBuilders" /* 11302 */;
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
