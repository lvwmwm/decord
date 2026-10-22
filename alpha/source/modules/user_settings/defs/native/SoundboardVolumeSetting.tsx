// Module ID: 16526
// Function ID: 16527
// Name: SoundboardVolumeSetting
// Dependencies: [8318, 11181, 1128, 7437, 7429, 7263, 2]

// Module 16526 (SoundboardVolumeSetting)
import intl2 from "intl" /* 1128 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7263 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7429 */;
import SoundboardUtils from "SoundboardUtils" /* 7437 */;
import SettingsConstants from "SettingsConstants" /* 8318 */;
import SettingBuilders from "SettingBuilders" /* 11181 */;
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
