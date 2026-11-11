// Module ID: 17757
// Function ID: 17758
// Name: SoundboardVolumeSetting
// Dependencies: [9136, 12317, 1113, 12931, 7163, 7871, 2]

// Module 17757 (SoundboardVolumeSetting)
import intl2 from "intl" /* 1113 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7163 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7871 */;
import SettingsConstants from "SettingsConstants" /* 9136 */;
import SoundboardUtils from "SoundboardUtils" /* 12931 */;
import SettingBuilders from "SettingBuilders" /* 12317 */;
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
