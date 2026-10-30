// Module ID: 17178
// Function ID: 17179
// Name: EchoCancellationSetting
// Dependencies: [2007, 8424, 504, 11505, 1114, 11917, 2]

// Module 17178 (EchoCancellationSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1114 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import UserSettingsVoiceUtils from "UserSettingsVoiceUtils" /* 11917 */;
import MediaEngineStore from "MediaEngineStore" /* 2007 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.iWTwu6);
  },
  parent: MobileUserSettings.VOICE,
  useValue: function useEchoCancellationSettingValue() {
    let echoCancellation;
    const items = [MediaEngineStore];
    const obj = get_initialized;
    return obj.useStateFromStores(items, () => echoCancellation.getEchoCancellation());
  },
  onValueChange: UserSettingsVoiceUtils.handleEchoCancellationChange
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/EchoCancellationSetting.tsx");

export default toggle;
