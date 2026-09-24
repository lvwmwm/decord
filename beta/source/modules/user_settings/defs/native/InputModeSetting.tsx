// Module ID: 15517
// Function ID: 15518
// Name: InputModeSetting
// Dependencies: [1996, 8270, 4815, 558, 568, 504, 1119, 11630, 10276, 2]

// Module 15517 (InputModeSetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import MediaEngineStore from "MediaEngineStore" /* 1996 */;

require = fn;
const InputModes = fn(4815).InputModes;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11630);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let Q8gkVL = dependencyMap;
  const cResult = c.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore];
    const fn = function o() {
      return mode.getMode();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp3 = items;
    tmp4 = fn;
  } else {
    [tmp3, tmp4] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp3, tmp4);
  if (cResult[2] !== stateFromStores) {
    if (stateFromStores === InputModes.PUSH_TO_TALK) {
      const intl2 = tmp(1119).intl;
      Q8gkVL = tmp(1119).t.Q8gkVL;
      let stringResult = intl2.string(Q8gkVL);
    } else {
      const intl = tmp(1119).intl;
      stringResult = intl.string(tmp(1119).t.cHCEOJ);
    }
    cResult[2] = stateFromStores;
    cResult[3] = stringResult;
  } else {
    return cResult[3];
  }
}) : (() => {
  const items = [MediaEngineStore];
  if (obj.useStateFromStores(items, () => mode.getMode()) === InputModes.PUSH_TO_TALK) {
    const intl2 = tmp(1119).intl;
    let stringResult = intl2.string(tmp(1119).t.Q8gkVL);
  } else {
    const intl = tmp(1119).intl;
    stringResult = intl.string(tmp(1119).t.cHCEOJ);
  }
  return stringResult;
});
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["pS+K2L"]);
  },
  parent: fn(8270).MobileUserSettings.VOICE,
  useTrailing: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    let Q8gkVL = dependencyMap;
    const cResult = c.c(4);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [MediaEngineStore];
      const fn = function o() {
        return mode.getMode();
      };
      cResult[0] = items;
      cResult[1] = fn;
      tmp3 = items;
      tmp4 = fn;
    } else {
      [tmp3, tmp4] = cResult;
    }
    const stateFromStores = initialize.useStateFromStores(tmp3, tmp4);
    if (cResult[2] !== stateFromStores) {
      if (stateFromStores === InputModes.PUSH_TO_TALK) {
        const intl2 = tmp(1119).intl;
        Q8gkVL = tmp(1119).t.Q8gkVL;
        let stringResult = intl2.string(Q8gkVL);
      } else {
        const intl = tmp(1119).intl;
        stringResult = intl.string(tmp(1119).t.cHCEOJ);
      }
      cResult[2] = stateFromStores;
      cResult[3] = stringResult;
    } else {
      return cResult[3];
    }
  }) : (() => {
    const items = [MediaEngineStore];
    if (obj.useStateFromStores(items, () => mode.getMode()) === InputModes.PUSH_TO_TALK) {
      const intl2 = tmp(1119).intl;
      let stringResult = intl2.string(tmp(1119).t.Q8gkVL);
    } else {
      const intl = tmp(1119).intl;
      stringResult = intl.string(tmp(1119).t.cHCEOJ);
    }
    return stringResult;
  }),
  onPress: fn(10276).handleInputModePress,
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t.nuFtHH)];
    return items;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InputModeSetting.tsx");

export default pressable;
