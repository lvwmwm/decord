// Module ID: 14798
// Function ID: 14799
// Name: SoundboardVolumeSetting
// Dependencies: [7417, 11006, 1115, 6762, 6756, 6603, 2]

// Module 14798 (SoundboardVolumeSetting)
import intl2 from "intl" /* 1115 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 6756 */;
import SoundboardUtils from "SoundboardUtils" /* 6762 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
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
