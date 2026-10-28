// Module ID: 19479
// Function ID: 19480
// Name: useEnableCommunityModalIcons
// Dependencies: [32, 19, 1095, 5011, 19480, 19481, 19482, 19486, 19487, 8147, 558, 576, 5241, 2]

// Module 19479 (useEnableCommunityModalIcons)
import Constants from "Constants" /* 1095 */;
import useThemeDefault from "useTheme" /* 5241 */;
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
      tmpResult = tmp(19480);
    } else {
      tmpResult = tmp(19481);
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
      tmpResult = tmp(19486);
    } else {
      tmpResult = tmp(19487);
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
