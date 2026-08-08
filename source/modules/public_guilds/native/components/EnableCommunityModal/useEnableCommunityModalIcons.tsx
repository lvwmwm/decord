// Module ID: 16744
// Function ID: 16745
// Name: safetyCheck
// Dependencies: [32, 19, 505, 4153, 16745, 16746, 16747, 16751, 16752, 8027, 4239, 2]
// Exports: default

// Module 16744 (safetyCheck)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { ThemeTypes } from "sum";

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
      let tmpResult = tmp(16745);
    } else {
      tmpResult = tmp(16746);
    }
    return tmpResult;
  },
  set: undefined
});
Object.defineProperty(prototype, "channelSetup", {
  get: function channelSetup() {
    return require(16747) /* getChannelSetupSource */.getChannelSetupSource(this.theme);
  },
  set: undefined
});
Object.defineProperty(prototype, "finishingTouches", {
  get: function finishingTouches() {
    if (obj.isThemeDark(this.theme)) {
      let tmpResult = tmp(16751);
    } else {
      tmpResult = tmp(16752);
    }
    return tmpResult;
  },
  set: undefined
});
Object.defineProperty(prototype, "close", {
  get: function close() {
    return require(8027) /* registerAsset */;
  },
  set: undefined
});
const result = require("sum").fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/useEnableCommunityModalIcons.tsx");

export default function useEnableCommunityModalIcons() {
  let closure_0 = importDefault(4239)();
  return callback(React.useState(() => {
    if (typeof outer1_6 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const obj = Object.create(outer1_6.prototype);
    obj[0] = outer1_5.LIGHT;
    obj.theme = closure_0;
    return obj;
  }), 1)[0];
};
