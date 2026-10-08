// Module ID: 15348
// Function ID: 15349
// Name: SoundboardVolumeSetting
// Dependencies: [7966, 11262, 1126, 7046, 7038, 6865, 2]

// Module 15348 (SoundboardVolumeSetting)
import intl2 from "intl" /* 1126 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6865 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7038 */;
import SoundboardUtils from "SoundboardUtils" /* 7046 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
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
