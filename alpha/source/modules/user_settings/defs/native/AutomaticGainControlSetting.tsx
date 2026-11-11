// Module ID: 17763
// Function ID: 17764
// Name: AutomaticGainControlSetting
// Dependencies: [2130, 9136, 504, 1113, 12317, 12942, 2]

// Module 17763 (AutomaticGainControlSetting)
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
    return intl.string(intl2.t.cUMdH0);
  },
  parent: MobileUserSettings.VOICE,
  useValue: function useAutomaticGainControlSettingValue() {
    let automaticGainControl;
    const items = [MediaEngineStore];
    const obj = get_initialized;
    return obj.useStateFromStores(items, () => automaticGainControl.getAutomaticGainControl());
  },
  onValueChange: UserSettingsVoiceUtils.handleAutomaticGainControlChange,
  useDescription: function useAutomaticGainControlSettingDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t["6EjbvA"]);
  }
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AutomaticGainControlSetting.tsx");

export default toggle;
