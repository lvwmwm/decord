// Module ID: 16670
// Function ID: 16671
// Name: SoundboardVolumeSetting
// Dependencies: [8712, 11942, 1112, 10989, 6830, 7539, 2]

// Module 16670 (SoundboardVolumeSetting)
import intl2 from "intl" /* 1112 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 6830 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7539 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import SoundboardUtils from "SoundboardUtils" /* 10989 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
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
