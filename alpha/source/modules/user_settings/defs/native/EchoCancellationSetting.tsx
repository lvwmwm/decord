// Module ID: 17569
// Function ID: 17570
// Name: EchoCancellationSetting
// Dependencies: [2130, 8503, 504, 11685, 1113, 12122, 2]

// Module 17569 (EchoCancellationSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 8503 */;
import UserSettingsVoiceUtils from "UserSettingsVoiceUtils" /* 12122 */;
import MediaEngineStore from "MediaEngineStore" /* 2130 */;
import SettingBuilders from "SettingBuilders" /* 11685 */;
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
