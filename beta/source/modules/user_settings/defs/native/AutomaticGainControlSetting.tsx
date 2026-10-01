// Module ID: 14804
// Function ID: 14805
// Name: AutomaticGainControlSetting
// Dependencies: [1993, 7417, 504, 1115, 11006, 9449, 2]

// Module 14804 (AutomaticGainControlSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1115 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import UserSettingsVoiceUtils from "UserSettingsVoiceUtils" /* 9449 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
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
