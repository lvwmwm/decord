// Module ID: 16306
// Function ID: 16307
// Name: InputModeSetting
// Dependencies: [2014, 8260, 5216, 558, 576, 504, 1128, 11084, 11466, 2]

// Module 16306 (InputModeSetting)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import intl3 from "intl" /* 1128 */;
import Constants from "Constants" /* 5216 */;
import SettingsConstants from "SettingsConstants" /* 8260 */;
import UserSettingsVoiceInputOptions from "UserSettingsVoiceInputOptions" /* 11466 */;
import MediaEngineStore from "MediaEngineStore" /* 2014 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11084 */;
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
      const intl2 = tmp(1128).intl;
      stringResult = intl2.string(tmp(1128).t.Q8gkVL);
    } else {
      const intl = tmp(1128).intl;
      stringResult = intl.string(tmp(1128).t.cHCEOJ);
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
    const intl2 = tmp(1128).intl;
    stringResult = intl2.string(tmp(1128).t.Q8gkVL);
  } else {
    const intl = tmp(1128).intl;
    stringResult = intl.string(tmp(1128).t.cHCEOJ);
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
