// Module ID: 17886
// Function ID: 17887
// Name: useEnableCommunityModalIcons
// Dependencies: [32, 19, 1096, 4735, 17887, 17888, 17889, 17893, 17894, 4815, 558, 576, 4797, 2]

// Module 17886 (useEnableCommunityModalIcons)
import Constants from "Constants" /* 1096 */;
import useThemeDefault from "useTheme" /* 4797 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const ThemeTypes = Constants.ThemeTypes;
class EnableCommunityModalIcons {
  constructor(theme) {
    const merged = Object.assign({ theme: null });
    merged[0] = ThemeTypes.LIGHT;
    merged.theme = theme;
    return merged;
  }
}
const prototype = EnableCommunityModalIcons.prototype;
Object.defineProperty(prototype, "safetyCheck", {
  get: function safetyCheck() {
    let tmpResult;
    const obj = require("shared");
    if (obj.isThemeDark(this.theme)) {
      tmpResult = tmp(17887);
    } else {
      tmpResult = tmp(17888);
    }
    return tmpResult;
  },
  set: undefined
});
Object.defineProperty(prototype, "channelSetup", {
  get: function channelSetup() {
    const obj = require("ChannelSetup");
    return obj.getChannelSetupSource(this.theme);
  },
  set: undefined
});
Object.defineProperty(prototype, "finishingTouches", {
  get: function finishingTouches() {
    let tmpResult;
    const obj = require("shared");
    if (obj.isThemeDark(this.theme)) {
      tmpResult = tmp(17893);
    } else {
      tmpResult = tmp(17894);
    }
    return tmpResult;
  },
  set: undefined
});
Object.defineProperty(prototype, "close", {
  get: function close() {
    return require("AssetRegistry");
  },
  set: undefined
});
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_0;
  let tmp3;
  const obj = require("react");
  const cResult = obj.c(2);
  const tmp2 = useThemeDefault();
  _require = tmp2;
  if (cResult[0] !== tmp2) {
    const fn = function s() {
      if (typeof EnableCommunityModalIcons === "function") {
        const merged = Object.assign({ theme: null });
        merged[0] = ThemeTypes.LIGHT;
        merged.theme = tmp;
        return merged;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    cResult[0] = tmp2;
    cResult[1] = fn;
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  return _slicedToArray(react.useState(tmp3), 1)[0];
}) : (() => {
  let closure_0 = useThemeDefault();
  return _slicedToArray(react.useState(() => {
    if (typeof EnableCommunityModalIcons === "function") {
      const merged = Object.assign({ theme: null });
      merged[0] = ThemeTypes.LIGHT;
      merged.theme = tmp;
      return merged;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }), 1)[0];
});
const result = size.fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/useEnableCommunityModalIcons.tsx");

export default tmp2;
