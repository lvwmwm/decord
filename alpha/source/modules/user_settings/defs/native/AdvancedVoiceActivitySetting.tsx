// Module ID: 17497
// Function ID: 17498
// Name: AdvancedVoiceActivitySetting
// Dependencies: [2135, 8573, 504, 6050, 1113, 11729, 2]

// Module 17497 (AdvancedVoiceActivitySetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1113 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 6050 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import MediaEngineStore from "MediaEngineStore" /* 2135 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.BbESsg);
  },
  parent: MobileUserSettings.VOICE,
  useValue: function useAdvancedVoiceActivitySettingValue() {
    let modeOptions;
    const items = [MediaEngineStore];
    const obj = get_initialized;
    return obj.useStateFromStores(items, () => modeOptions.getModeOptions().vadUseKrisp);
  },
  onValueChange: function onAdvancedVoiceActivitySettingValueChange(vadUseKrisp) {
    const mode = MediaEngineStore.getMode();
    const obj = AudioActionCreatorsDefault;
    const obj2 = { vadUseKrisp };
    obj.setMode(mode, obj2);
  },
  useDescription: function useAdvancedVoiceActivitySettingDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t.LoOB1F);
  },
  usePredicate: function useHasAdvancedVoiceActivitySetting() {
    let advancedVoiceActivitySupported;
    const items = [MediaEngineStore];
    const obj = get_initialized;
    return obj.useStateFromStores(items, () => advancedVoiceActivitySupported.isAdvancedVoiceActivitySupported());
  }
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AdvancedVoiceActivitySetting.tsx");

export default toggle;
