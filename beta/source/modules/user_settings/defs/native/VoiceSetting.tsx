// Module ID: 15515
// Function ID: 15516
// Name: VoiceSetting
// Dependencies: [1996, 1078, 558, 568, 504, 1119, 11630, 10298, 15516, 2]

// Module 15515 (VoiceSetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import MediaEngineStore from "MediaEngineStore" /* 1996 */;

require = fn;
const Constants = fn(1078);
({ InputModes: c3, UserSettingsSections } = Constants);
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11630);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let Q8gkVL = dependencyMap;
  const cResult = c.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore];
    const fn = function s() {
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
    if (stateFromStores === constants.PUSH_TO_TALK) {
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
  if (obj.useStateFromStores(items, () => mode.getMode()) === constants.PUSH_TO_TALK) {
    const intl2 = tmp(1119).intl;
    let stringResult = intl2.string(tmp(1119).t.Q8gkVL);
  } else {
    const intl = tmp(1119).intl;
    stringResult = intl.string(tmp(1119).t.cHCEOJ);
  }
  return stringResult;
});
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.K3lovD);
  },
  parent: null,
  IconComponent: fn(10298).MicrophoneIcon,
  useTrailing: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    let Q8gkVL = dependencyMap;
    const cResult = c.c(4);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [MediaEngineStore];
      const fn = function s() {
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
      if (stateFromStores === constants.PUSH_TO_TALK) {
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
    if (obj.useStateFromStores(items, () => mode.getMode()) === constants.PUSH_TO_TALK) {
      const intl2 = tmp(1119).intl;
      let stringResult = intl2.string(tmp(1119).t.Q8gkVL);
    } else {
      const intl = tmp(1119).intl;
      stringResult = intl.string(tmp(1119).t.cHCEOJ);
    }
    return stringResult;
  }),
  screen: {
    route: UserSettingsSections.VOICE,
    getComponent() {
      return require("SettingsVoiceScreen").default;
    }
  },
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t.nuFtHH)];
    return items;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/VoiceSetting.tsx");

export default route;
