// Module ID: 17586
// Function ID: 17587
// Name: safetyCheck
// Dependencies: [32, 19, 502, 1362, 17587, 17588, 17589, 17593, 17594, 6932, 4416, 2]
// Exports: default

// Module 17586 (safetyCheck)
import useThemeDefault from "useTheme" /* 4416 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { ThemeTypes } from "sum" /* 502 */;

const require = arg1;
class EnableCommunityModalIcons {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj[0] = ThemeTypes.LIGHT;
    obj.theme = global;
    return obj;
  }
}
const prototype = EnableCommunityModalIcons.prototype;
Object.defineProperty(prototype, "safetyCheck", {
  get: function safetyCheck() {
    if (obj.isThemeDark(this.theme)) {
      let tmpResult = tmp(17587);
    } else {
      tmpResult = tmp(17588);
    }
    return tmpResult;
  },
  set: undefined
});
Object.defineProperty(prototype, "channelSetup", {
  get: function channelSetup() {
    return require(17589) /* getChannelSetupSource */.getChannelSetupSource(this.theme);
  },
  set: undefined
});
Object.defineProperty(prototype, "finishingTouches", {
  get: function finishingTouches() {
    if (obj.isThemeDark(this.theme)) {
      let tmpResult = tmp(17593);
    } else {
      tmpResult = tmp(17594);
    }
    return tmpResult;
  },
  set: undefined
});
Object.defineProperty(prototype, "close", {
  get: function close() {
    return require(6932) /* registerAsset */;
  },
  set: undefined
});
const result = require("set").fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/useEnableCommunityModalIcons.tsx");

export default function useEnableCommunityModalIcons() {
  closure_0 = useThemeDefault();
  return callback(React.useState(() => {
    if (typeof closure_1_6 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const obj = Object.create(closure_1_6.prototype);
    obj[0] = closure_1_5.LIGHT;
    obj.theme = closure_0;
    return obj;
  }), 1)[0];
};
