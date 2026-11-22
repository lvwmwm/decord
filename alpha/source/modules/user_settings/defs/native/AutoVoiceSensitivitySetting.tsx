// Module ID: 16652
// Function ID: 16653
// Name: AutoVoiceSensitivitySetting
// Dependencies: [2131, 8712, 504, 5809, 11937, 1112, 2]

// Module 16652 (AutoVoiceSensitivitySetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1112 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 5809 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import MediaEngineStore from "MediaEngineStore" /* 2131 */;
import SettingBuilders from "SettingBuilders" /* 11937 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.Z4oaN0);
  },
  parent: MobileUserSettings.VOICE,
  useValue: function useAutoVoiceSensitivitySettingValue() {
    let modeOptions;
    const items = [MediaEngineStore];
    const obj = get_initialized;
    return obj.useStateFromStores(items, () => modeOptions.getModeOptions().autoThreshold);
  },
  onValueChange: function onAutoVoiceSensitivitySettingValueChange(autoThreshold) {
    const mode = MediaEngineStore.getMode();
    const obj = AudioActionCreatorsDefault;
    const obj2 = { autoThreshold };
    obj.setMode(mode, obj2);
  },
  useSearchTerms() {
    const intl = intl2.intl;
    const items = [intl.string(intl2.t.nuFtHH)];
    return items;
  }
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AutoVoiceSensitivitySetting.tsx");

export default toggle;
