// Module ID: 17876
// Function ID: 17877
// Name: SoundboardVolumeSetting
// Dependencies: [9202, 12408, 1113, 13023, 7226, 7937, 2]

// Module 17876 (SoundboardVolumeSetting)
import intl2 from "intl" /* 1113 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7226 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7937 */;
import SettingsConstants from "SettingsConstants" /* 9202 */;
import SoundboardUtils from "SoundboardUtils" /* 13023 */;
import SettingBuilders from "SettingBuilders" /* 12408 */;
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
