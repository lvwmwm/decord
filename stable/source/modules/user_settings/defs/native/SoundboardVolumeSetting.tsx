// Module ID: 17599
// Function ID: 17600
// Name: SoundboardVolumeSetting
// Dependencies: [8536, 11717, 1113, 7630, 7622, 7445, 2]

// Module 17599 (SoundboardVolumeSetting)
import intl2 from "intl" /* 1113 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7445 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7622 */;
import SoundboardUtils from "SoundboardUtils" /* 7630 */;
import SettingsConstants from "SettingsConstants" /* 8536 */;
import SettingBuilders from "SettingBuilders" /* 11717 */;
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
