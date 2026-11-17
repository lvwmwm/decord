// Module ID: 17915
// Function ID: 17916
// Name: SoundboardVolumeSetting
// Dependencies: [9213, 12612, 1113, 11662, 7234, 7947, 2]

// Module 17915 (SoundboardVolumeSetting)
import intl2 from "intl" /* 1113 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7234 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7947 */;
import SettingsConstants from "SettingsConstants" /* 9213 */;
import SoundboardUtils from "SoundboardUtils" /* 11662 */;
import SettingBuilders from "SettingBuilders" /* 12612 */;
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
