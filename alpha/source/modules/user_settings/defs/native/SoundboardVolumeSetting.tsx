// Module ID: 15861
// Function ID: 15862
// Name: SoundboardVolumeSetting
// Dependencies: [7993, 10663, 1126, 7056, 7048, 6879, 2]

// Module 15861 (SoundboardVolumeSetting)
import intl2 from "intl" /* 1126 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6879 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7048 */;
import SoundboardUtils from "SoundboardUtils" /* 7056 */;
import SettingsConstants from "SettingsConstants" /* 7993 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
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
