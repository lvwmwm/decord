// Module ID: 16692
// Function ID: 16693
// Name: SoundboardVolumeSetting
// Dependencies: [9414, 11815, 1112, 10260, 10262, 6254, 2]

// Module 16692 (SoundboardVolumeSetting)
import intl2 from "intl" /* 1112 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6254 */;
import SettingsConstants from "SettingsConstants" /* 9414 */;
import SoundboardUtils from "SoundboardUtils" /* 10260 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 10262 */;
import SettingBuilders from "SettingBuilders" /* 11815 */;
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
