// Module ID: 16194
// Function ID: 16195
// Name: SoundboardVolumeSetting
// Dependencies: [8210, 10991, 1126, 7277, 7269, 7098, 2]

// Module 16194 (SoundboardVolumeSetting)
import intl2 from "intl" /* 1126 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7098 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7269 */;
import SoundboardUtils from "SoundboardUtils" /* 7277 */;
import SettingsConstants from "SettingsConstants" /* 8210 */;
import SettingBuilders from "SettingBuilders" /* 10991 */;
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
