// Module ID: 18102
// Function ID: 18103
// Name: useEnableCommunityModalIcons
// Dependencies: [32, 19, 1085, 4607, 18103, 18104, 18105, 18109, 18110, 7237, 4690, 2]
// Exports: default

// Module 18102 (useEnableCommunityModalIcons)
import useThemeDefault from "useTheme" /* 4690 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const ThemeTypes = fn(1085).ThemeTypes;
class EnableCommunityModalIcons {
  constructor(arg0) {
    merged = Object.assign({ theme: null });
    merged[0] = ThemeTypes.LIGHT;
    merged.theme = global;
    return merged;
  }
}
const prototype = EnableCommunityModalIcons.prototype;
Object.defineProperty(prototype, "safetyCheck", {
  get: function safetyCheck() {
    if (obj.isThemeDark(this.theme)) {
      let tmpResult = tmp(18103);
    } else {
      tmpResult = tmp(18104);
    }
    return tmpResult;
  },
  set: undefined
});
Object.defineProperty(prototype, "channelSetup", {
  get: function channelSetup() {
    return require("ChannelSetup").getChannelSetupSource(this.theme);
  },
  set: undefined
});
Object.defineProperty(prototype, "finishingTouches", {
  get: function finishingTouches() {
    if (obj.isThemeDark(this.theme)) {
      let tmpResult = tmp(18109);
    } else {
      tmpResult = tmp(18110);
    }
    return tmpResult;
  },
  set: undefined
});
Object.defineProperty(prototype, "close", {
  get: function close() {
    return require("module_7237");
  },
  set: undefined
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/useEnableCommunityModalIcons.tsx");

export default function useEnableCommunityModalIcons() {
  closure_0 = useThemeDefault();
  return _slicedToArray(noop.useState(() => {
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
