// Module ID: 17753
// Function ID: 17754
// Name: AutoVoiceSensitivitySetting
// Dependencies: [2130, 9136, 504, 6162, 12317, 1113, 2]

// Module 17753 (AutoVoiceSensitivitySetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1113 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 6162 */;
import SettingsConstants from "SettingsConstants" /* 9136 */;
import MediaEngineStore from "MediaEngineStore" /* 2130 */;
import SettingBuilders from "SettingBuilders" /* 12317 */;
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
