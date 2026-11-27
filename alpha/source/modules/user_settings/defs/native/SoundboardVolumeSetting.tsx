// Module ID: 16871
// Function ID: 16872
// Name: SoundboardVolumeSetting
// Dependencies: [9556, 11970, 1112, 10405, 10407, 6380, 2]

// Module 16871 (SoundboardVolumeSetting)
import intl2 from "intl" /* 1112 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6380 */;
import SettingsConstants from "SettingsConstants" /* 9556 */;
import SoundboardUtils from "SoundboardUtils" /* 10405 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 10407 */;
import SettingBuilders from "SettingBuilders" /* 11970 */;
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
