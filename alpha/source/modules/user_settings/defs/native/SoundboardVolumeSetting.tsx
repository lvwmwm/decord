// Module ID: 17174
// Function ID: 17175
// Name: SoundboardVolumeSetting
// Dependencies: [8424, 11505, 1114, 7519, 7511, 7345, 2]

// Module 17174 (SoundboardVolumeSetting)
import intl2 from "intl" /* 1114 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7345 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7511 */;
import SoundboardUtils from "SoundboardUtils" /* 7519 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
