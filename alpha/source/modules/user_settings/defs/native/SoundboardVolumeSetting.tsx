// Module ID: 16718
// Function ID: 16719
// Name: SoundboardVolumeSetting
// Dependencies: [8624, 11897, 1113, 10944, 6738, 7450, 2]

// Module 16718 (SoundboardVolumeSetting)
import intl2 from "intl" /* 1113 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 6738 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7450 */;
import SettingsConstants from "SettingsConstants" /* 8624 */;
import SoundboardUtils from "SoundboardUtils" /* 10944 */;
import SettingBuilders from "SettingBuilders" /* 11897 */;
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
