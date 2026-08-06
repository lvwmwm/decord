// Module ID: 16647
// Function ID: 16648
// Name: safetyCheck
// Dependencies: [32, 19, 505, 4130, 16648, 16649, 16650, 16654, 16655, 7950, 4221, 2]
// Exports: default

// Module 16647 (safetyCheck)
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
      let tmpResult = tmp(16648);
    } else {
      tmpResult = tmp(16649);
    }
    return tmpResult;
  },
  set: undefined
});
Object.defineProperty(prototype, "channelSetup", {
  get: function channelSetup() {
    return require(16650) /* getChannelSetupSource */.getChannelSetupSource(this.theme);
  },
  set: undefined
});
Object.defineProperty(prototype, "finishingTouches", {
  get: function finishingTouches() {
    if (obj.isThemeDark(this.theme)) {
      let tmpResult = tmp(16654);
    } else {
      tmpResult = tmp(16655);
    }
    return tmpResult;
  },
  set: undefined
});
Object.defineProperty(prototype, "close", {
  get: function close() {
    return require(7950) /* registerAsset */;
  },
  set: undefined
});
const result = require("sum").fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/useEnableCommunityModalIcons.tsx");

export default function useEnableCommunityModalIcons() {
  let closure_0 = importDefault(4221)();
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
