// Module ID: 19951
// Function ID: 19952
// Name: useEnableCommunityModalIcons
// Dependencies: [32, 19, 1083, 4799, 19952, 19953, 19954, 19958, 19959, 6913, 5001, 2]
// Exports: default

// Module 19951 (useEnableCommunityModalIcons)
import Constants from "Constants" /* 1083 */;
import useThemeDefault from "useTheme" /* 5001 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

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
      tmpResult = tmp(19952);
    } else {
      tmpResult = tmp(19953);
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
      tmpResult = tmp(19958);
    } else {
      tmpResult = tmp(19959);
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
const result = size.fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/useEnableCommunityModalIcons.tsx");

export default function useEnableCommunityModalIcons() {
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
};
