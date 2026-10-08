// Module ID: 15355
// Function ID: 15356
// Name: AdvancedVoiceActivitySetting
// Dependencies: [2011, 7966, 558, 576, 504, 5241, 1126, 11262, 2]

// Module 15355 (AdvancedVoiceActivitySetting)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 5241 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import MediaEngineStore from "MediaEngineStore" /* 2011 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasAdvancedVoiceActivitySetting() {
  let advancedVoiceActivitySupported;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore];
    const fn = function o() {
      return advancedVoiceActivitySupported.isAdvancedVoiceActivitySupported();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (function useHasAdvancedVoiceActivitySetting() {
  let advancedVoiceActivitySupported;
  const items = [MediaEngineStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => advancedVoiceActivitySupported.isAdvancedVoiceActivitySupported());
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAdvancedVoiceActivitySettingValue() {
  let modeOptions;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore];
    const fn = function o() {
      return modeOptions.getModeOptions().vadUseKrisp;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (function useAdvancedVoiceActivitySettingValue() {
  let modeOptions;
  const items = [MediaEngineStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => modeOptions.getModeOptions().vadUseKrisp);
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.BbESsg);
  },
  parent: MobileUserSettings.VOICE,
  useValue: tmp3,
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
  usePredicate: tmp2
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AdvancedVoiceActivitySetting.tsx");

export default toggle;
