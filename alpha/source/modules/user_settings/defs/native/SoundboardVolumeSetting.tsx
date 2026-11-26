// Module ID: 16864
// Function ID: 16865
// Name: SoundboardVolumeSetting
// Dependencies: [9555, 11962, 1112, 10404, 10406, 6380, 2]

// Module 16864 (SoundboardVolumeSetting)
import intl2 from "intl" /* 1112 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6380 */;
import SettingsConstants from "SettingsConstants" /* 9555 */;
import SoundboardUtils from "SoundboardUtils" /* 10404 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 10406 */;
import SettingBuilders from "SettingBuilders" /* 11962 */;
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
