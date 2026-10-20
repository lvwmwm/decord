// Module ID: 18925
// Function ID: 18926
// Name: useEnableCommunityModalIcons
// Dependencies: [32, 19, 1098, 4952, 18926, 18927, 18928, 18932, 18933, 8062, 558, 576, 5166, 2]

// Module 18925 (useEnableCommunityModalIcons)
import Constants from "Constants" /* 1098 */;
import useThemeDefault from "useTheme" /* 5166 */;
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
      tmpResult = tmp(18926);
    } else {
      tmpResult = tmp(18927);
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
      tmpResult = tmp(18932);
    } else {
      tmpResult = tmp(18933);
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
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useEnableCommunityModalIcons() {
  let closure_0;
  let tmp3;
  const obj = require("react");
  const cResult = obj.c(2);
  const tmp2 = useThemeDefault();
  _require = tmp2;
  if (cResult[0] !== tmp2) {
    const fn = function o() {
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
}) : (function useEnableCommunityModalIcons() {
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
