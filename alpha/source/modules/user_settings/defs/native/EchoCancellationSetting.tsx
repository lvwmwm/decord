// Module ID: 17761
// Function ID: 17762
// Name: EchoCancellationSetting
// Dependencies: [2130, 9136, 504, 12317, 1113, 12942, 2]

// Module 17761 (EchoCancellationSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 9136 */;
import UserSettingsVoiceUtils from "UserSettingsVoiceUtils" /* 12942 */;
import MediaEngineStore from "MediaEngineStore" /* 2130 */;
import SettingBuilders from "SettingBuilders" /* 12317 */;
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
