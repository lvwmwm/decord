// Module ID: 15344
// Function ID: 15345
// Name: AutoVoiceSensitivitySetting
// Dependencies: [2011, 7966, 558, 576, 504, 5241, 11262, 1126, 2]

// Module 15344 (AutoVoiceSensitivitySetting)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 5241 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import MediaEngineStore from "MediaEngineStore" /* 2011 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAutoVoiceSensitivitySettingValue() {
  let modeOptions;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore];
    const fn = function n() {
      return modeOptions.getModeOptions().autoThreshold;
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
}) : (function useAutoVoiceSensitivitySettingValue() {
  let modeOptions;
  const items = [MediaEngineStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => modeOptions.getModeOptions().autoThreshold);
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.Z4oaN0);
  },
  parent: MobileUserSettings.VOICE,
  useValue: tmp2,
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
