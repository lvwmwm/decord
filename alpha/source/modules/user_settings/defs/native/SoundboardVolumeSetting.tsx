// Module ID: 16435
// Function ID: 16436
// Name: SoundboardVolumeSetting
// Dependencies: [8308, 11155, 1128, 7429, 7421, 7255, 2]

// Module 16435 (SoundboardVolumeSetting)
import intl2 from "intl" /* 1128 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7255 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7421 */;
import SoundboardUtils from "SoundboardUtils" /* 7429 */;
import SettingsConstants from "SettingsConstants" /* 8308 */;
import SettingBuilders from "SettingBuilders" /* 11155 */;
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
