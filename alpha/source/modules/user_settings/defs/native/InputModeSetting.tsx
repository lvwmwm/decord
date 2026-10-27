// Module ID: 16647
// Function ID: 16648
// Name: InputModeSetting
// Dependencies: [2011, 8331, 5719, 558, 576, 504, 1125, 11212, 11622, 2]

// Module 16647 (InputModeSetting)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import intl3 from "intl" /* 1125 */;
import Constants from "Constants" /* 5719 */;
import SettingsConstants from "SettingsConstants" /* 8331 */;
import UserSettingsVoiceInputOptions from "UserSettingsVoiceInputOptions" /* 11622 */;
import MediaEngineStore from "MediaEngineStore" /* 2011 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11212 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const InputModes = Constants.InputModes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useInputModeSettingTrailing() {
  let mode;
  let tmp4;
  let tmp5;
  let tmp8;
  const obj = react;
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore];
    const fn = function o() {
      return mode.getMode();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    let stringResult;
    if (stateFromStores === InputModes.PUSH_TO_TALK) {
      const intl2 = tmp(1125).intl;
      stringResult = intl2.string(tmp(1125).t.Q8gkVL);
    } else {
      const intl = tmp(1125).intl;
      stringResult = intl.string(tmp(1125).t.cHCEOJ);
    }
    cResult[2] = stateFromStores;
    cResult[3] = stringResult;
    tmp8 = stringResult;
  } else {
    tmp8 = cResult[3];
  }
  return tmp8;
}) : (function useInputModeSettingTrailing() {
  let mode;
  let stringResult;
  const items = [MediaEngineStore];
  const obj = get_initialized;
  if (obj.useStateFromStores(items, () => mode.getMode()) === InputModes.PUSH_TO_TALK) {
    const intl2 = tmp(1125).intl;
    stringResult = intl2.string(tmp(1125).t.Q8gkVL);
  } else {
    const intl = tmp(1125).intl;
    stringResult = intl.string(tmp(1125).t.cHCEOJ);
  }
  return stringResult;
});
let obj = {
  useTitle() {
    const intl = intl3.intl;
    return intl.string(intl3.t["pS+K2L"]);
  },
  parent: MobileUserSettings.VOICE,
  useTrailing: tmp2,
  onPress: UserSettingsVoiceInputOptions.handleInputModePress,
  useSearchTerms() {
    const intl = intl3.intl;
    const items = [intl.string(intl3.t.nuFtHH)];
    return items;
  }
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InputModeSetting.tsx");

export default pressable;
